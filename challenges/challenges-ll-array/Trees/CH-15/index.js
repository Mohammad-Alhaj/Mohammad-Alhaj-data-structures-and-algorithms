'use strict';

// const Node = require('./node')
// const BinaryTree = require('./binaryTree')





// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// let tree = new BinaryTree(one);


// console.log(tree.preOrder());
const BinarySearch = require('./binarySearch');

const ele = new BinarySearch();

ele.insert(10)
ele.insert(5)
ele.insert(11)
ele.insert(33)
ele.insert(37)
ele.insert(39)
ele.insert(78)
ele.insert(14)
ele.insert(48)
ele.insert(65)
ele.insert(61)

ele.Contains(49)
console.log('eleee',ele);


/*[
    1, 2, 6, 7, 8,
    9, 3, 4, 5
  ]*/
