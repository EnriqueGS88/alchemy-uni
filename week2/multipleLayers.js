class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
        this.concat(  this.leaves[0], this.leaves[1] );
    }
    getRoot() {

        console.log( this.root );

        return this._getRoot( this.root );
        
    }

    _getRoot( arr ) {

        if ( arr.length === 2 ) {
            return this.concat( arr[0], arr[1] );
        } else {

            // let numberOfLayers = 1 + Math.log( this.leaves.length )/Math.log( 2 );
            let numberOfLayers = 1 + Math.log( arr.length )/Math.log( 2 );

            console.log( "number of layers: ", numberOfLayers );
            console.log( "array length: ", arr.length );

            let accumulator = [];
    
            for ( let i = 0; i < numberOfLayers; i++ ) {
    
                let thisRound = 2 * i;
    
                // let midOutput = this.concat( this.leaves[ thisRound ], this.leaves[ thisRound + 1 ] );
                let midOutput = this.concat( arr[ thisRound ], arr[ thisRound + 1 ] );
    
                accumulator.push( midOutput );
    
            }

        }


        console.log( accumulator );

        // return output;
        return this._getRoot( accumulator );

    }

}

// module.exports = MerkleTree;

const test = () => {

    const concat = (a, b) => `Hash(${a} + ${b})`;
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const merkleTree = new MerkleTree(leaves, concat);

    const output = merkleTree.getRoot();

    console.log("test output: ", output );

};

test();