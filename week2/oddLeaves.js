class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
    this.layers = [leaves];
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

      currentLayer = nextLayer;
    }

    return currentLayer[0];
  }
}

module.exports = MerkleTree;