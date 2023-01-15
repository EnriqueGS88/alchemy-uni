class MerkleTree {
    constructor(leaves, concat) {
      this.leaves = leaves;
      this.concat = concat;
      this.layers = [];
    }
  
    getRoot() {
      let currentLayer = this.leaves;
  
      while (currentLayer.length > 1) {
        
        const nextLayer = [];
  
        for (let i = 0; i < currentLayer.length - 1; i += 2) {
          nextLayer.push(this.concat(currentLayer[i], currentLayer[i + 1]));
        }
  
        if (currentLayer.length % 2 === 1) {
          nextLayer.push(currentLayer[currentLayer.length - 1]);
        }
        
        this.layers.push(currentLayer);
        currentLayer = nextLayer;
      }
  
      return currentLayer[0];
    }

    getProof(index) {
        if (index < 0 || index >= this.leaves.length) {
            throw new Error("Invalid index");
        }
        let proof = [];
        let currentLayer = this.leaves;
        let currentIndex = index;

        console.log( "current layer:", currentLayer );

        while (currentLayer.length > 1) {
            const isRightNode = currentIndex % 2 === 1;
            const pairIndex = isRightNode ? currentIndex - 1 : currentIndex + 1;
            proof.push({
                data: currentLayer[pairIndex],
                left: !isRightNode
            });
            currentIndex = Math.floor(currentIndex / 2);
            currentLayer = this.layers[this.layers.length - 1 - proof.length];
        }

        return proof;
    }

  }
  
  module.exports = MerkleTree;