const Block = require('../week1/whatsInAHash');

class Blockchain {
    constructor( data ) {
        this.chain = [ 
            new Block( data ),
        ];
    }
}

module.exports = Blockchain;