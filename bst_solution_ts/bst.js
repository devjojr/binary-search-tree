var BSTNode = /** @class */ (function () {
  function BSTNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  BSTNode.prototype.toString = function () {
    return String(this.data);
  };
  BSTNode.prototype.inOrder = function () {
    if (this.left !== null) {
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.inOrder();
    }
  };
  return BSTNode;
})();
var BST = /** @class */ (function () {
  function BST(root) {
    if (root === void 0) {
      root = null;
    }
    this.root = root;
  }
  BST.prototype.insert = function (data) {
    if (data === null) {
      throw new Error("Data cannot be null");
    }
    if (this.root === null) {
      this.root = new BSTNode(data);
      return this.root;
    } else {
      return this._insert(this.root, data);
    }
  };
  BST.prototype._insert = function (node, data) {
    if (node === null) {
      return new BSTNode(data);
    }
    if (data === node.data) {
      throw new Error("Cannot have duplicate values");
    }
    if (data < node.data) {
      if (node.left === null) {
        var newNode = new BSTNode(data);
        newNode.parent = node;
        node.left = newNode;
        return newNode;
      } else {
        return this._insert(node.left, data);
      }
    } else {
      if (node.right === null) {
        var newNode = new BSTNode(data);
        newNode.parent = node;
        node.right = newNode;
        return newNode;
      } else {
        return this._insert(node.right, data);
      }
    }
  };
  BST.prototype.inOrder = function () {
    if (this.root) {
      this.root.inOrder();
    }
  };
  return BST;
})();
var bst = new BST();
bst.insert(6);
bst.insert(2);
bst.insert(9);
bst.insert(1);
bst.insert(3);
bst.inOrder();
