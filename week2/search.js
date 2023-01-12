const Node = require('../week2/node');

class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {

        if( !this.root ) {
            this.root = node;
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

    hasNode(value) {
        return this._hasNode(this.root, value);
    }

    _hasNode(node, value) {
        if (!node) return false;
        if (node.data === value) return true;
        if (value < node.data) {
            return this._hasNode(node.left, value);
        } else {
            return this._hasNode(node.right, value);
        }
    }




}

module.exports = Tree;

// const test = () => {

//     const tree = new Tree();

//     const output = tree.addNode(new Node(4));

//     console.log( output );

// }

// test();