const Block = require('../week1/whatsInAHash');
const assert = require('assert');
const SHA256 = require("crypto-js/sha256");
// const random = require( 'faker' );

describe('Block', function() {
    it('should store a random name', function() {
        const randomName = "Lupe Ele Choso";
        assert.equal(randomName, new Block(randomName).data)
    });

    it('should hash some random data', function() {
        const randomEmail = "lupe@elechoso";
        const myHash = SHA256(randomEmail).toString();
        const yourHash = new Block(randomEmail).toHash().toString();
        assert.equal(myHash, yourHash);
    })
})