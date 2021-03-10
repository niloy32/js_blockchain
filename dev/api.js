const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Blockchain = require("./Blockchain");
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


app.listen(3000, function () {
    console.log("listening to port 3000");
})