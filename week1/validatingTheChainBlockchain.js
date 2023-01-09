const Block = require('./validatingTheChainBlock.js');
const SHA256 = require('crypto-js/sha256');


class Blockchain {
    constructor(  ) {
        this.chain = [ 
            // new Block( data ),
        ];
    }

    addBlock( block ) {

        // If this is the very first block, just call it "genesis"
        let previousBlockNumber = ( this.chain.length == 0 ? "genesis" : this.chain.length -1 );

        let blockHash;

        if( previousBlockNumber != "genesis" ) {
            
            // for non-genesis blocks, calculate the hash of the previous block by hashing both:
            // 1) the data of the previous block
            // 2) the hash of the previous block
            let prevData = this.chain[ previousBlockNumber ].data;
            let prevHash = this.chain[ previousBlockNumber ].previousHash;

            blockHash = SHA256( prevData + prevHash );

        } else {
            blockHash = "genesis";
        }
        
        block.previousHash = blockHash;

        this.chain.push( block );
    }

    isValid( ) {

        let isValidChain = [];

        for ( let i = 0; i < this.chain.length-1; i++ ) {
            let blockData = this.chain[ i ].data;
            let blockPrevHash = this.chain[ i ].previousHash;

            let blockHash = SHA256( blockData + blockPrevHash );

            let nextBlockHash = this.chain[ i + 1 ].previousHash;

            let validBlock = blockHash.toString() === nextBlockHash.toString();

            isValidChain.push( validBlock );

        }

        console.log( isValidChain );

        if ( isValidChain.includes( false ) == true )  {

            return false;

        } else {
            return true;
        }

    }

}

module.exports = Blockchain;

