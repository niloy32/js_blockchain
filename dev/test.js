const randomWords = require("random-words");
const Blockchain = require("./blockchain");

const dogeCoin = new Blockchain();

const previousBlockHash = "814y10";
const currrentBlockData = [
  {
    ammount: 10.1,
    sender: "2ouneadw",
    recipient: "aawdsdsd",
  },
  {
    ammount: 102.1,
    sender: "adzawdwegw",
    recipient: "2segz31",
  },
  {
    ammount: 103.1,
    sender: "azsgesd",
    recipient: "ezgrw",
  },
];

//var test = dogeCoin.ProofOfWork(previousBlockHash, currrentBlockData);

//console.log(dogeCoin);
// let soemthing = randomWords(5).join("-").toUpperCase();
// console.log(soemthing);

var soemthingarr = [11, 22, 33];

let ins = 0;
let newObject = {
  id: "",
  Location: "",
};
var object1 = [
  {
    // a: 'somestring',
    // b: 42,
    // c: false
  },
];

// const pushSomething = {
//     id: this.id++,
//     location: this.location
// }
// object1.push(pushSomething);

// console.log(object1)

// newObject["id"] = 123;
// console.log("lok" + newObject);

// soemthingarr.forEach(callsomething => {
//     const pushSomething = {
//         ID: ins++,
//         Lcation: soemthingarr[ins - 1]
//     }
//     object1.push(pushSomething);
//     console.log(object1)
// })
// console.log("asds")
// console.log(object1);

const bc1 = {
  chain: [
    {
      index: 1,
      timeStamp: 1615850490658,
      transaction: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
      data: "This is Genesis Block",
    },
    {
      index: 2,
      timeStamp: 1615850541312,
      transaction: [
        {
          ammount: 69,
          sender: "dawdawdaw",
          recipient: "asdawdawd",
          data: "this data was added at 5:21:41 AM",
          transactionId: "KNEW-FIFTEEN-CLOSE-WHEN-FIERCE",
        },
        {
          ammount: 409,
          sender: "dawdawdaw",
          recipient: "asdawdawd",
          data: "this data was added at 5:22:12 AM",
          transactionId: "MEASURE-RECENTLY-WELL-REALIZE-TILL",
        },
      ],
      nonce: 14786,
      hash: "0000bbaa7a0c42dcb405fa1661c5db714084d86a71a9c4f3064d20587e8929ef",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timeStamp: 1615850589096,
      transaction: [
        {
          ammount: 12.5,
          sender: "00",
          data: "this data was added at 5:22:21 AM",
          transactionId: "SUIT-RELIGIOUS-BONE-PROCESS-VAPOR",
        },
      ],
      nonce: 64519,
      hash: "0000a7188b866f1bfb4dc5960c4ad095d868ec0261ad3c47451eb85e1587ce29",
      previousBlockHash:
        "0000bbaa7a0c42dcb405fa1661c5db714084d86a71a9c4f3064d20587e8929ef",
    },
  ],
  PendingTransactions: [
    {
      ammount: 12.5,
      sender: "00",
      data: "this data was added at 5:23:09 AM",
      transactionId: "TIME-EAT-REALIZE-POLITICAL-THIRTY",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

const bc2 = {
  chain: [
    {
      index: 1,
      timeStamp: 1615853635118,
      transaction: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
      data: "This is Genesis Block",
    },
    {
      index: 2,
      timeStamp: 1615853650014,
      transaction: [],
      nonce: 16441,
      hash: "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timeStamp: 1615853671142,
      transaction: [
        {
          ammount: 12.5,
          sender: "00",
          data: "this data was added at 6:14:10 AM",
          transactionId: "NEST-FEAR-BUS-MINUTE-IMPOSSIBLE",
        },
        {
          ammount: 409,
          sender: "dawdawdaw",
          recipient: "asdawdawd",
          data: "this data was added at 6:14:27 AM",
          transactionId: "BRIGHT-REFUSED-IS-PROTECTION-ATTEMPT",
        },
      ],
      nonce: 30462,
      hash: "00007f9cbf341fc6076158d36e170f0cbe4b916cc7fb1bd719990a4fc7a15b39",
      previousBlockHash:
        "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
    },
  ],
  PendingTransactions: [
    {
      ammount: 12.5,
      sender: "00",
      data: "this data was added at 6:14:31 AM",
      transactionId: "SWIM-DIRTY-CARE-NOBODY-TIN",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("value bc2:" + dogeCoin.chainIsValid(bc2.chain));
