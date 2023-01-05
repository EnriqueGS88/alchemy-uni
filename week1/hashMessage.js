const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

function hashMessage(message) {

    const bytes = utf8ToBytes( message );
    const hash = keccak256( bytes );
    // const hexa = toHex( hash );
    // console.log( hash );
    // console.log( hexa );

    return hash;
    
}

module.exports = hashMessage;

// hashMessage( "hello world" );