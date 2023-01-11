class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {

        if( !this.root ) {
            this.root =  node;
        } else {
            this.addChildNode( this.root, node );
        }
    }

    addChildNode(parent, child) {
        switch(true) {
            case child.data < parent.data:
                if (parent.left) {
                    this.addChildNode(parent.left, child);
                } else {
                    parent.left = child;
                }
                break;
            case child.data >= parent.data:
                if (parent.right) {
                    this.addChildNode(parent.right, child);
                } else {
                    parent.right = child;
                }
                break;
        }
    }

}

module.exports = Tree;