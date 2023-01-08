const Block = require('./linkingTheBlocksBlock.js');
const SHA256 = require('crypto-js/sha256');


class Blockchain {
    constructor(  ) {
        this.chain = [ 
            // new Block( data ),
        ];
    }

    addBlock( block ) {

        let previousBlockNumber = ( this.chain.length == 0 ? "genesis" : this.chain.length -1 );

        let blockHash;

        if( previousBlockNumber != "genesis" ) {
            
            let prevData = this.chain[ previousBlockNumber ].data;
            let prevHash = this.chain[ previousBlockNumber ].previousHash;

            blockHash = SHA256( prevData + prevHash );

        } else {
            blockHash = "genesis";
        }
        
        block.previousHash = blockHash;

        this.chain.push( block );
    }

}

module.exports = Blockchain;