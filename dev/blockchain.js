const sha256 = require("sha256");
const currentNodeUrl = process.argv[3];
const {
    v4: uuidv4
} = require('uuid');
const randomWords = require('random-words');

function Blockchain() {
    this.chain = [];
    this.PendingTransections = [];
    // Genesis BLock 
    //CHange later to add data

    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];

    this.createNewBlock(100, "0", "0", "This is Genesis Block");

}

Blockchain.prototype.createNewBlock = function (
    nonce,
    previousBlockHash,
    hash,
    data
) {
    const newBlock = {
        index: this.chain.length + 1,
        timeStamp: Date.now(),
        transection: this.PendingTransections,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
        data: data,
    };
    this.PendingTransections = [];
    this.chain.push(newBlock);

    return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1];
};

//creates new transection onject and pushes it to pending transection.
//and renturns the number of block it will be added to.
//you should change this later to add data suited to your need instead of $$
Blockchain.prototype.createNewTransection = function (
    ammount,
    sender,
    recipient,
    data
) {
    const newTransection = {
        ammount: ammount,
        sender: sender,
        recipient: recipient,
        data: data,
        transactionId: randomWords(5).join("-").toUpperCase()
    };

    return newTransection;
};

Blockchain.prototype.addTransectionToPendingTransaction = function (transactionObj) {
    this.PendingTransections.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
};

//this converts the data to fixed size string using sha256

Blockchain.prototype.hashBlock = function (previousBlockhash, currentBlockData, nonce) {
    const data_as_string =
        previousBlockhash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(data_as_string);
    return hash;
};

Blockchain.prototype.ProofOfWork = function (previousBlockhash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
        //console.log(hash);
    }
    return nonce;
}


module.exports = Blockchain;