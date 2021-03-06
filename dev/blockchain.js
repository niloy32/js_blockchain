function Blockchain(params) {
  this.chain = [];
  this.PendingTransections = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHas,
  hash,
  data
) {
  const newBlock = {
    index: this.chain.length + 1,
    timeStamp: Date.now(),
    transection: this.PendingTransections,
    nonce: nonce,
    hash: hash,
    previousBlockHas: previousBlockHas,
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
  recipient
) {
  const newTransection = {
    ammount: ammount,
    sender: sender,
    recipient: recipient,
  };

  this.PendingTransections.push(newTransection);

  return this.getLastBlock()["index"] + 1;
};

module.exports = Blockchain;
