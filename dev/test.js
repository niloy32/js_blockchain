const randomWords = require('random-words');
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



//console.log(dogeCoin);
// let soemthing = randomWords(5).join("-").toUpperCase();
// console.log(soemthing);

var soemthingarr = [11, 22, 33]

let ins = 0;
let newObject = {
    "id": "",
    "Location": ""
};
var object1 = [{
    // a: 'somestring',
    // b: 42,
    // c: false
}];

// const pushSomething = {
//     id: this.id++,
//     location: this.location
// }
// object1.push(pushSomething);

// console.log(object1)


// newObject["id"] = 123;
// console.log("lok" + newObject);

soemthingarr.forEach(callsomething => {
    const pushSomething = {
        ID: ins++,
        Lcation: soemthingarr[ins - 1]
    }
    object1.push(pushSomething);
    console.log(object1)
})
console.log("asds")
console.log(object1);