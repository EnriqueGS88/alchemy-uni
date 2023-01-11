const Tree = require('../week2/tree');
const { assert } = require('chai');

describe('tree', () => {
    const tree = new Tree();
    
    it('should have a null root', () => {
        assert.strictEqual(tree.root, null);
    });
});