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

      // 1 - Get pair index
      let isLeftNode = index % 2 === 0;
      let pairIndex = isLeftNode ? index + 1 : index - 1;
      proof.push({
        data: currentLayer[pairIndex],
        left: !isLeftNode
      });

      // 2 - Get last index of array
      let lastNode = currentLayer[ currentLayer.length -1 ];
      proof.push({
        data: lastNode,
        left: false
      });

      // 3 - Summatory of all other leaves - in pairs
      for ( let i = 0; i < currentLayer.length; i++ ) {

        singleTuple = [];
        singleTuple.push( i );
        singleTuple.push( i + 1 );

        tuples.push( singleTuple );

      };

      let tupleOfCurrentIndex = tuples.indexOf( index );


      if( index > tupleOfCurrentIndex ) {

        proof.push( 
          {
            
          }
        )

      } else {

      }



      // 4 - Convert the array into an Object with 3 properties


      
      // for ( let i = 0; i < currentLayer.length -1; i++ ) {

      // }

      return proof;
      
      
      // while (currentLayer.length > 1) {
        //     let isLeftNode = index % 2 === 0;
        //     let pairIndex = isLeftNode ? index + 1 : index - 1;
        //     proof.push({
        //         data: currentLayer[pairIndex],
        //         left: !isLeftNode
        //     });
        //     index = Math.floor(index / 2);
        // }

    }






  }
  
  module.exports = MerkleTree;

