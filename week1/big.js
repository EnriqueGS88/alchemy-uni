const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
let blocks = [];


let mempool = [ 
    { sender: 'bob', to: 'alice' },
    { sender: 'bob', to: 'alice' },
    { sender: 'bob', to: 'alice' },
    { sender: 'bob', to: 'alice' },
    { sender: 'bob', to: 'alice' },
];

function mine() {
    // TODO: mine a block
    let newId;
    (blocks.length == 0 ? newId = 0 : newId = blocks.length);

    let mempoolSelect = mempool.slice(0, MAX_TRANSACTIONS);

    let thisNonce = 0;

    for ( let i = 0; i < 100; i++ ) {

        thisNonce = i;

        let newBlock = {
            id: newId,
            transactions: mempoolSelect,
            nonce: thisNonce,
        }

        console.log( "nonce: ", thisNonce );
    
        let blockString = JSON.stringify(newBlock);
        let blockHash = SHA256(blockString);

        let bigBlockHash = BigInt( `0x${ blockHash }` );

        console.log( "block: ", bigBlockHash );
        console.log( "target: ", TARGET_DIFFICULTY );
        // console.log( bigBlockHash < TARGET_DIFFICULTY );

        if ( bigBlockHash < TARGET_DIFFICULTY ) {
            console.log( "found correct nonce: ", thisNonce );
            break;
        }

    }

    let newBlock = {
        id: newId,
        transactions: mempoolSelect,
        nonce: thisNonce,
    }

    let blockString = JSON.stringify(newBlock);
    let blockHash = SHA256(blockString);


    newBlock.hash = blockHash;
    blocks.push(newBlock);
    mempool.splice(0, MAX_TRANSACTIONS);

};

mine();
