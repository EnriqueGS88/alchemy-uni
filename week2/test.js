const {assert} = require("chai");
const {concatLetters} = require('../test/buildTheProofUtil.test.js');
const MerkleTree = require('./buildTheProof');


const test = () => {
    
    // const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const leaves = ['A', 'B', 'C', 'D', 'E'];
    
    const lettersTree = new MerkleTree(leaves, concatLetters);

    console.log( lettersTree );

    proofArray = [];

    leaves.forEach( (leaf, i) => {

        const proof = lettersTree.getProof(i);

        proofArray.push( proof );


    } );

    console.log( proofArray );


};

test();


