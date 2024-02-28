// A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
// Left child is always less than it's parent and the right child is always bigger than it's parent.

class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //inserts a number into the tree. Returns the entire tree.
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
    //finds the given number and returns it. If its not found, returns `null` or `undefined`.
    find(value) {
      if (!this.root) return null;
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (!current) return undefined;
        if (value === current.value) return current;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    //checks if a given number exists in the tree. If its in the tree, returns `true`, otherwise `false`
    contains(value) {
      if (!this.root) return null;
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (!current) return false;
        if (value === current.value) return true;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
  }
  
  
  
  

  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(45); 
  binarySearchTree.insert(27); 
  binarySearchTree.insert(67);
  binarySearchTree.insert(36);
  binarySearchTree.insert(56);
  binarySearchTree.insert(15);
  binarySearchTree.insert(75);
  binarySearchTree.insert(31); 
  binarySearchTree.insert(53);
  binarySearchTree.insert(39); 
  binarySearchTree.insert(64); 
  binarySearchTree.contains(123); 