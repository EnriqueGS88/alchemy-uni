class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {

        switch ( true ) {
            case this.root == null:
                this.root = node;
                break;
            case node.data > this.root.data:
                this.root.right = node;
                break;
            case node.data < this.root.data:
                this.root.left = node;
                break;
        }


    }


}

module.exports = Tree;