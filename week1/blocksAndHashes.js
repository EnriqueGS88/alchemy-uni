const SHA256 = require('crypto-js/sha256');

class Block {
    toHash() {

        const myName = "heykike"
        return SHA256( myName );
    }
}

module.exports = Block;
