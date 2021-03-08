const Blockchain = require("./Blockchain");

const dogeCoin = new Blockchain();


dogeCoin.createNewBlock(1234, "#FirstHash#", "#2ndHash#", "This is data");

dogeCoin.createNewTransection(6969, "2qdaw", "23qdad");

dogeCoin.createNewBlock(1234, "#aawd#", "#FirstHash#", "This 2nd is data");


const previousBlockHash = "814y10";
const currrentBlockData = [{
    ammount: 10.1,
    sender: '2ouneadw',
    recipient: 'aawdsdsd'
}, {
    ammount: 102.1,
    sender: 'adzawdwegw',
    recipient: '2segz31'
}, {
    ammount: 103.1,
    sender: 'azsgesd',
    recipient: 'ezgrw'
}];


//var test = dogeCoin.ProofOfWork(previousBlockHash, currrentBlockData);



console.log(dogeCoin);