'use strict';
const Node = require('../node');
const BinarySearch = require('../binarySearch');
const BinaryTree = require('../binaryTree');
let tree = null
describe('binaryTree',()=>{


    test('instantiate an empty tree',()=>{
      const  trees = new BinaryTree()
        expect(trees.root).toEqual(null)

    });
    
    

        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

    tree = new BinaryTree(one);
 

    test('instantiate a tree with a single root node',()=>{
    let one = new Node(1);
let two = new Node(2);

     one.left = two;
     let tree = new BinaryTree(one);
        expect(tree).toEqual({"root": {"left": {"left": null, "right": null, "value": 2}, "right": null, "value": 1}})

    })

    test('collection from a pre-order traversal',()=>{
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
          expect(preOrder).toEqual(expectedOutput)
  
      });

    test('collection from an in-order traversal', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    test(' collection from a post-order traversal', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });
      

})