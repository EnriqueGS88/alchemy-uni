class MerkleTree {
    constructor(leaves, concat) {
      this.leaves = leaves;
      this.concat = concat;
      this.layers = [leaves];
    }
  
    getRoot() {

      let currentLayer = this.leaves;

      //Run this iteration as long as the new Array has +1 Elements
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
  
  module.exports = MerkleTree;
  