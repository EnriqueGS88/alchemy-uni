const Block = require('../week1/whatsInAHash');

class Blockchain {
    constructor( data ) {
        this.chain = [ 
            new Block( data ),
        ];
    }

    addBlock( block ) {
        this.chain.push( block );
    }

}

module.exports = Blockchain;