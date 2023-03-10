const Blockchain = require('../week1/linkingTheBlocksBlockchain');
const Block = require('../week1/linkingTheBlocksBlock');
const assert = require('assert');
const SHA256 = require("crypto-js/sha256");

let blockchain;
describe('Linking Blocks', function () {
    beforeEach(() => {
        blockchain = new Blockchain();
    });
    
    describe('adding a new block to our blockchain', function () {
        let genesisBlock;
        let block1;
        beforeEach(() => {
            genesisBlock = new Block(5);
            block1 = new Block(7);
            blockchain.addBlock(genesisBlock);
            blockchain.addBlock(block1);
        });

        it('should have a previousHash property equal to the previous blocks hash', function () {

            console.log( "blockchain: ", blockchain );
            console.log( "block1.prevHash: ", block1.previousHash.toString() );
            console.log( "genBlock Hashed: ", genesisBlock.toHash().toString() );

            assert.equal(block1.previousHash.toString(), genesisBlock.toHash().toString());
        });

        describe('after changing the genesis block data', () => {
            let initialGenesisHash;
            let intiialBlock1Hash;
            beforeEach(() => {
                initialGenesisHash = genesisBlock.toHash().toString();
                intiialBlock1Hash = block1.toHash().toString();
                genesisBlock.data = 10; // here we change the Genesis Block Data
            });

            it('should alter the genesis hash', () => {
                const newHash = genesisBlock.toHash().toString();
                assert.notEqual(initialGenesisHash, newHash, "Expected changing the genesis blocks data to change its hash calculation!");    
            });

            it('should alter the second blocks hash', () => {
                const newHash = genesisBlock.toHash().toString();
                assert.notEqual(intiialBlock1Hash, newHash, "Expected changing the genesis blocks data to change the second blocks hash calculation!");
            });
        });
    });
});