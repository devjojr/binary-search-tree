class BSTNode {
  data: any;
  left: BSTNode | null;
  right: BSTNode | null;
  parent: BSTNode | null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  toString(): string {
    return String(this.data);
  }

  inOrder(): any {
    if (this.left !== null) {
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.inOrder();
    }
  }
}

class BST {
  root: BSTNode | null;

  constructor(root: BSTNode | null = null) {
    this.root = root;
  }

  insert(data: any): BSTNode {
    if (data === null) {
      throw new Error("Data cannot be null");
    }

    if (this.root === null) {
      this.root = new BSTNode(data);
      return this.root;
    } else {
      return this._insert(this.root, data);
    }
  }

  private _insert(node: BSTNode, data: any): BSTNode {
    if (node === null) {
      return new BSTNode(data);
    }

    if (data === node.data) {
      throw new Error("Cannot have duplicate values");
    }

    if (data < node.data) {
      if (node.left === null) {
        const newNode = new BSTNode(data);
        newNode.parent = node;
        node.left = newNode;
        return newNode;
      } else {
        return this._insert(node.left, data);
      }
    } else {
      if (node.right === null) {
        const newNode = new BSTNode(data);
        newNode.parent = node;
        node.right = newNode;
        return newNode;
      } else {
        return this._insert(node.right, data);
      }
    }
  }

  inOrder(): any {
    if (this.root) {
      this.root.inOrder();
    }
  }
}

const bst = new BST();
bst.insert(6);
bst.insert(2);
bst.insert(9);
bst.insert(1);
bst.insert(3);
bst.inOrder();
