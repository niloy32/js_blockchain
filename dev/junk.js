const Block = require("./block");

class BlockChain {
  constructor() {
    this.chain = [
      new Block(0, new Date().toUTCString(), "I AM THE GENESIS BLOCK", "0"),
    ];
  }

  getPreviousHash() {
    return this.chain[this.chain.length - 1].hash;
  }
  addBlock(data) {
    const timestamp = new Date().toUTCString();
    const index = this.chain.length;
    const previousHash = this.getPreviousHash();
    const newBlock = new Block(index, timestamp, data, previousHash);
    if (this.isvalid(newBlock)) {
      this.chain.push(newBlock);
    } else {
      console.log("INVALID BLOCK");
    }
  }
  isvalid(newBlock) {
    const currentBlock = this.chain[this.chain.length - 1];
    if (currentBlock.index + 1 !== newBlock.index) {
      console.log("1st");
      return false;
    } else if (newBlock.previousHash !== currentBlock.hash) {
      console.log(newBlock.previousHash);
      console.log(currentBlock.hash);
      console.log("2nd");
      return false;
    } else if (newBlock.previousHash !== newBlock.CalculateHash()) {
      console.log("3rd");
      return false;
    }
    return true;
  }

  printChain() {
    console.log(this.chain);
  }
}

module.exports = BlockChain;
