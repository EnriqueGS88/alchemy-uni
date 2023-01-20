const {assert} = require("chai");
const {hashProof, sha256, concatHash, concatLetters} = require('../test/buildTheProofUtil.test.js');
const MerkleTree = require('./buildTheProof');


const test = () => {
    
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    
    const lettersTree = new MerkleTree(leaves, concatLetters);

    console.log( lettersTree );

    proofArray = [];

    leaves.forEach( (leaf, i) => {

        const proof = lettersTree.getProof(i);

        proofArray.push( proof );

        console.log( i );


    } );

    console.log( proofArray );


};

test();


