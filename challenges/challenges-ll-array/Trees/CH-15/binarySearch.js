"use strict";
const Node = require("./node");

class BinarySearch {
  constructor(root = null) {
    this.root = root;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      console.log(this);
      return this;
    } else {
      let temp = this.root;
      while (1) {
        if (newNode.value == temp.value) {
          console.log("undefined");
          return undefined;
        }
        if (newNode.value < temp.value) {
          if (temp.left == null) {
            temp.left = newNode;
            console.log(this);
            return this;
          }
          temp = temp.left;
        } else {
          if (temp.right == null) {
            temp.right = newNode;
            console.log(this);
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  Contains(value) {
    if (value == this.root.value) {
      console.log(this.root.value);
      return this.root.value;
    }

    let temp = this.root;
    while (1) {
      if (value > this.root.right.value) {
        if (value == temp.right.value) {
          console.log(temp.right.value);
          return temp.right.value;
        } else {
          if (temp.right.right.value == value) {
            console.log(value);

            return value;
          } else {
            if (temp.right.left.value == value) {
              console.log(value);

              return value;
            }
          }
        }
        temp = temp.right;
      } else {
        if (value == temp.left.value) {
          console.log(value);

          return temp.left.value;
        } else {
          if (temp.left.left.value == value) {
            console.log(value);

            return value;
          } else {
            if (temp.left.left.value == value) {
              console.log(value);

              return value;
            }
          }
        }
        temp = temp.left;
      }
    }
  }
}

module.exports = BinarySearch;
