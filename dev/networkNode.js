const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Blockchain = require("./Blockchain");
const rp = require('request');
const {
    v4: uuidv4
} = require('uuid');

const bitcoin = new Blockchain();

const nodeAdress = uuidv4().split('-').join('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
})

// sends the data to a node
app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransection(req.body.amount, req.body.sender, req.body.recipient, req.body.data)
    res.json({
        note: `Transextion will be addded in block ${blockIndex}.`
    });
})
app.get('/mine', function (req, res) {
    const LastBlock = bitcoin.getLastBlock();
    const previousBlockHash = LastBlock['hash'];

    const currrentBlockData = {
        transaction: bitcoin.PendingTransections,
        index: LastBlock['index'] + 1,
        data: "current block data"
    };

    const nonce = bitcoin.ProofOfWork(previousBlockHash, currrentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currrentBlockData, nonce);

    bitcoin.createNewTransection(12.5, "00", nodeAdress, "mined added data");
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: "new block successful",
        block: newBlock
    });
})



//register and brodcast node to the network
app.post('/register_brodcast_node', function (req, res) {
    //loop that bordcasts this nodes url to all other nodes in the network
    const newNodeUrl = req.body.newNodeUrl;
    // Searches the whole network index of the input index is present or not.
    //if not present return -1 .
    if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl);

    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOption = {
            uri: networkNodeUrl + '/register_node',
            method: 'POST',
            body: {
                newNodeUrl: newNodeUrl
            },
            json: true
        };
        regNodesPromises.push(rp(requestOption));
    })
    Promise.all(regNodesPromises)
        .then(data => {
            const bulkRegisterOption = {
                uri: newNodeUrl + '/register_node_bulk',
                method: 'POST',
                body: {
                    allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl]
                },
                json: true
            }
            return rp(bulkRegisterOption)

        }).then(data => {
            res.json({
                note: 'new node registered succesful'
            })
        })
});

//just register node
app.post('/register_node', function (req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    const nodeNoteAlreaadyPresent = bitcoin.networkNodes.indexOf(newNodeUrl) == -1
    const NotCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl;
    if (nodeNoteAlreaadyPresent && NotCurrentNode) {
        bitcoin.networkNodes.push(newNodeUrl);
    }
    res.json({
        note: 'new node Resgister Scucesfully. '
    });

});

//when a new node registers to a single node this funtion sends registration
//info to other nodes too.
app.post('/register_node_bulk', function (req, res) {
    const allNetworkNodes = req.body.allNetworkNodes;
    allNetworkNodes.forEach(networkNodeUrl => {
        const nodeNotAlareadyPresent = bitcoin.networkNodes.indexOf(networkNodeUrl) == -1;
        const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl;
        if (nodeNotAlareadyPresent && notCurrentNode) bitcoin.networkNodes.push(networkNodeUrl);
    })
    res.json({
        note: 'new node register_node_bulk Successful. '
    });

});


const port = process.argv[2];
app.listen(port, function () {
    console.log(`listening to port ${port}...`);
})