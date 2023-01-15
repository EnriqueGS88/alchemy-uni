const {hashProof, sha256, concatHash, concatLetters} = require('../test/buildTheProofUtil.test.js');
const MerkleTree = require('../week2/buildTheProof');

const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const hashTree = new MerkleTree(leaves.map(sha256), concatHash);

const test = () => {

    console.log( hashTree );
    console.log( hashTree.leaves.length );

}

test();