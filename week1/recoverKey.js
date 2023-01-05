const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("../week1/hashMessage");

async function recoverKey(message, signature, recoveryBit) {

    const hash = hashMessage( message );
    
    // no need to have isCompressed: false;
    // any way the full pubKey is returned
    const publicKey = secp.recoverPublicKey( hash, signature, recoveryBit );
    console.log( publicKey );
    return publicKey;

}

module.exports = recoverKey;
// recoverKey(  );