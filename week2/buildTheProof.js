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

      buildTree(nodes) {
        if (nodes.length === 1) {
            return nodes;
        }

        const layer = [];
        for (let i = 0; i < nodes.length; i += 2) {
            const left = nodes[i];
            const right = nodes[i + 1];
            const concatenated = this.concat(left, right);
            layer.push(concatenated);
        }
        this.layers.push(layer);
        return this.buildTree(layer);
    }


    getProof(index) {
      if (index < 0 || index >= this.leaves.length) {
          throw new Error("Invalid index");
      }
      let proof = [];
      let currentLayer = this.leaves;
      // let currentIndex = index;

      while (currentLayer.length > 1) {
          let isLeftNode = index % 2 === 0;
          let pairIndex = isLeftNode ? index + 1 : index - 1;
          proof.push({
              data: currentLayer[pairIndex],
              left: !isLeftNode
          });
          index = Math.floor(index / 2);
          currentLayer = this.buildTree(this.leaves);

      }

      return proof;
    }



    /*
    // Fix: Cannot read "length" property of "undefined" array
    // In line 42
    // Calculated Proof does not match
    // Computed proof changes for every node
    getProof(index) {
        if (index < 0 || index >= this.leaves.length) {
            throw new Error("Invalid index");
        }
        let proof = [];
        let currentLayer = this.leaves;
        // let currentIndex = index;

        console.log( "current layer:", currentLayer.length );

        while (currentLayer.length > 1) {
          let isLeftNode = index % 2 === 0;
          let pairIndex = isLeftNode ? index + 1 : index - 1;
          proof.push({
            data: currentLayer[pairIndex],
            left: !isLeftNode
          });
          index = Math.floor(index / 2);

          // Problem is here: this.layers is an empty array []
          console.log( "layer before: ", currentLayer );
          // currentLayer = this.layers[this.layers.length - 1 - proof.length];
          console.log( "layer after: ", currentLayer );

        }

        return proof;
    }
    */

  }
  
  module.exports = MerkleTree;

