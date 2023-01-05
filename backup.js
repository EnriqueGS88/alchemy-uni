const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];


// given a hash, return the color that created the hash
module.exports = function findColor( hashes ) {

    const colorHash = COLORS.forEach(element => sha256(utf8ToBytes(element)));

    const indexOfColor = colorHash.find( element => element == hashes );



    console.log( indexOfColor );

    
}

// module.exports = findColor;