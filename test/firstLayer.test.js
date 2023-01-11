const Tree = require('../week2/firstLayer');
const Node = require('../week2/node');
const { assert } = require('chai');

describe('tree', () => {
    const tree = new Tree();

    it('should have a null root', () => {
        assert.strictEqual(tree.root, null);
    });

    describe('after adding a node', () => {
        before(() => {
            tree.addNode(new Node(5));
        });

        it('should have a root', () => {
            assert(tree.root, "did not find a root on the tree");
            assert.equal(tree.root.data, 5);
        });

        describe('after adding a lesser node', () => {
            before(() => {
                tree.addNode(new Node(3));
            });

            it('should have add a left to the root', () => {
                console.log( "tree left: ", tree.root.left );
                assert(tree.root.left, "did not find a left node on the root!");
                assert.equal(tree.root.left.data, 3);
            });
        });

        describe('after adding a greater node', () => {
            before(() => {
                tree.addNode(new Node(7));
            });

            it('should have add a right to the root', () => {
                console.log( "tree right: ", tree.root.right );
                assert(tree.root.right, "did not find a right node on the root!");
                assert.equal(tree.root.right.data, 7);
            });
        });
    });
});