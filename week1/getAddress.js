const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {

    const firstByte = publicKey.slice( 0, 1 );
    const restOfPubKey = publicKey.slice( 1, publicKey.length );
    const hash = keccak256( restOfPubKey );
    const address = hash.slice( hash.length-20, hash.length );

    return address;
    
}

module.exports = getAddress;