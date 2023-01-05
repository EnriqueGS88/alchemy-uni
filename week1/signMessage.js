const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {

    const hashMsg = hashMessage( msg );

    // recovered: true - sets the function to return the "recovery bit"
    // recovery bit is used to check who signed this message
    const signedMessage = await secp.sign( 
        hashMsg, 
        PRIVATE_KEY,
        {
            recovered: true,
        } 
        );
    console.log( signedMessage );

    return signedMessage;
    
}

module.exports = signMessage;
// signMessage( 'hello world' );