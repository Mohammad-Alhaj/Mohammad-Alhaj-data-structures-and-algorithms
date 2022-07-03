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
    if(this.root == null){
        console.log(null);
        return null;
    }
    let temp = this.root;
    while(temp){
        if(value < temp.value){
            temp = temp.left;
        }
        else if(value > temp.value){
            temp = temp.right;

        }else{
            console.log(true);
            return true
        }
    }
      console.log(false);
      return false
  }
}

module.exports = BinarySearch;
