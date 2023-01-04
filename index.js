const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

const sampleHash = 'c685a2c9bab235ccdd2ab0ea92281a521c8aaf37895493d080070ea00fc7f5d7';

// given a hash, return the color that created the hash
function findColor( hash ) {
    const colorHash = COLORS.map(element => toHex( sha256(utf8ToBytes(element))));
    const indexOfColor = colorHash.indexOf( hash );

    return COLORS[ indexOfColor ];
}

findColor( sampleHash );