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

    //   buildTree(nodes) {
    //     if (nodes.length === 1) {
    //         return nodes;
    //     }

    //     const layer = [];
    //     for (let i = 0; i < nodes.length; i += 2) {
    //         const left = nodes[i];
    //         const right = nodes[i + 1];
    //         const concatenated = this.concat(left, right);
    //         layer.push(concatenated);
    //     }
    //     this.layers.push(layer);
    //     return this.buildTree(layer);
    // }


    getProof(index) {
      if (index < 0 || index >= this.leaves.length) {
          throw new Error("Invalid index");
      }
      let proof = [];
      let currentLayer = this.leaves;
      // let currentIndex = index;

      
      // while (currentLayer.length > 1) {
        //     let isLeftNode = index % 2 === 0;
        //     let pairIndex = isLeftNode ? index + 1 : index - 1;
        //     proof.push({
        //         data: currentLayer[pairIndex],
        //         left: !isLeftNode
        //     });
        //     index = Math.floor(index / 2);
        // }


          // 1 - Get pair index
          // 2 - Get last index of array
          // 3 - Summatory of all other leaves - in pairs
          // 4 - Convert the array into an Object with 3 properties

      for ( let i = 0; i < currentLayer.length; i++ ) {
        let isLeftNode = index % 2 === 0;
        let pairIndex = isLeftNode ? index + 1 : index - 1;
        proof.push({
            data: currentLayer[pairIndex],
            left: !isLeftNode
        });
      }




      return proof;



    }






  }
  
  module.exports = MerkleTree;

