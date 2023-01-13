class MerkleTree {
    constructor(leaves, concat) {
      this.leaves = leaves;
      this.concat = concat;
      this.layers = [leaves];
    }
  
    getRoot() {

        const checkOddNumber = ( arr )=> {

            let remainder = arr.length % 2;

            if ( remainder ===0 ) {
                return false;
            } else {
                return true;
            }

        }

        const isOddNumber = checkOddNumber( this.leaves );

        
        if ( isOddNumber == true ) {

            let currentLayer = this.leaves;
            
            while (currentLayer.length > 1) {
      
              const nextLayer = [];
      
              for (let i = 0; i < currentLayer.length; i += 2) {
                nextLayer.push(this.concat(currentLayer[i], currentLayer[i + 1]));
              }

              nextLayer.push(this.concat(currentLayer[ currentLayer.length ] ) );
      
              currentLayer = nextLayer;

            }

            return currentLayer[0];
            
            
        } else {

            let currentLayer = this.leaves;
            
            while (currentLayer.length > 1) {
      
              const nextLayer = [];
      
              for (let i = 0; i < currentLayer.length; i += 2) {
                nextLayer.push(this.concat(currentLayer[i], currentLayer[i + 1]));
              }
      
              currentLayer = nextLayer;
            }

            return currentLayer[0];

        }


    }
  }
  
  module.exports = MerkleTree;
  