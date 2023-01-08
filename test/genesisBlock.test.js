const Blockchain = require('../week1/genesisBlock');
const Block = require('../week1/whatsInAHash');
const assert = require('assert');

describe('Blockchain', function() {
    it('should have a genesis block', function() {
        const blockchain = new Blockchain();
        const genesisBlock = blockchain.chain[0];

        console.log( "genesis block: ", genesisBlock );
        console.log( "instance: ", genesisBlock instanceof Block );

        assert(genesisBlock, 'Could not find the genesis block!');
        assert(genesisBlock instanceof Block, 'genesis block should be a block!');
    })
})