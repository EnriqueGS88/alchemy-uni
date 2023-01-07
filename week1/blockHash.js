const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool

    mempool.push(transaction);

}

function mine() {
    // TODO: mine a block
    let newId;

    (blocks.length == 0 ? newId = 0 : newId = blocks.length);

    let newBlock = {
        id: newId,
    }

    const blockString = JSON.stringify( newBlock );
    const blockHash = SHA256( blockString );

    newBlock.hash = blockHash;
    blocks.push(newBlock);

}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};