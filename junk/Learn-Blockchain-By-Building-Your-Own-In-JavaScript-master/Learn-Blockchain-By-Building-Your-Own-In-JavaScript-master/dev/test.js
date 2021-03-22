const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1615844706795,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1615844737185,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1615844748217,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b51c84a085d711eb91cfe7e2d84263d6",
                    "transactionId": "c73eb31085d711eb91cfe7e2d84263d6"
                }
            ],
            "nonce": 70536,
            "hash": "00004ecf7181644a1229fea5504ac20f560cc1a5ca0c2850e955847e258cc065",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "b51c84a085d711eb91cfe7e2d84263d6",
            "transactionId": "cdcd78b085d711eb91cfe7e2d84263d6"
        }
    ],
    "currentNodeUrl": "http://localhost:3011",
    "networkNodes": []
}


console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));









