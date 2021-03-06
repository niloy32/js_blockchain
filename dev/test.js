const Blockchain = require("./Blockchain");

const dogeCoin = new Blockchain();

dogeCoin.createNewBlock(1234, "#FirstHash#", "#2ndHash#", "This is data");

dogeCoin.createNewTransection(6969, "2qdaw", "23qdad");

console.log(dogeCoin);
