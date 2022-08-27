const {treeIntersection,BinaryTree,Node} = require('./intersection')



describe('Trees Intersection', () => {
    it('No Intersection', () => {
        let tree_1 = new BinaryTree();
        tree_1.root = new Node(1);
        tree_1.root.left = new Node(2);
        tree_1.root.right = new Node(3);
        tree_1.root.left.left = new Node(4);
        tree_1.root.left.right = new Node(5);
        tree_1.root.right.left = new Node(6);
        tree_1.root.right.right = new Node(7);
        tree_1.root.right.right.left = new Node(8);
        tree_1.root.right.right.right = new Node(9);
    
        let tree_2 = new BinaryTree();
        tree_2.root = new Node(10);
        tree_2.root.left = new Node(20);
        tree_2.root.right = new Node(30);
        tree_2.root.left.left = new Node(40);
        tree_2.root.left.right = new Node(50);
        tree_2.root.right.left = new Node(60);
        tree_2.root.right.right = new Node(70);
        tree_2.root.right.right.left = new Node(80);
        tree_2.root.right.right.right = new Node(90);
        
        expect(treeIntersection(tree_1, tree_2)).toEqual([]);
    });
    it('same trees', () => {
        let tree_1 = new BinaryTree();
        tree_1.root = new Node(1);
        tree_1.root.left = new Node(2);
        tree_1.root.right = new Node(3);
        tree_1.root.left.left = new Node(4);
        tree_1.root.left.right = new Node(5);
        tree_1.root.right.left = new Node(6);
        tree_1.root.right.right = new Node(7);
        tree_1.root.right.right.left = new Node(8);
        tree_1.root.right.right.right = new Node(9);
    
        let tree_2 = new BinaryTree();
        tree_2.root = new Node(1);
        tree_2.root.left = new Node(2);
        tree_2.root.right = new Node(3);
        tree_2.root.left.left = new Node(4);
        tree_2.root.left.right = new Node(5);
        tree_2.root.right.left = new Node(6);
        tree_2.root.right.right = new Node(7);
        tree_2.root.right.right.left = new Node(8);
        tree_2.root.right.right.right = new Node(9);
        console.log('what thes please tell me if you know',treeIntersection(tree_1, tree_2))
        expect(treeIntersection(tree_1, tree_2)).toEqual([1,2,4,5,3,6,7,8,9]);
    });
    it('different trees', () => {
        let tree_1 = new BinaryTree();
        tree_1.root = new Node(1);
        tree_1.root.left = new Node(2);
        tree_1.root.right = new Node(3);
        tree_1.root.left.left = new Node(4);
        tree_1.root.left.right = new Node(5);
        tree_1.root.right.left = new Node(6);
        tree_1.root.right.right = new Node(7);
        tree_1.root.right.right.left = new Node(8);
        tree_1.root.right.right.right = new Node(9);
    
        let tree_2 = new BinaryTree();
        tree_2.root = new Node(1);
        tree_2.root.left = new Node(2);
        tree_2.root.right = new Node(3);
        tree_2.root.left.left = new Node(4);
        tree_2.root.left.right = new Node(50);
        tree_2.root.right.left = new Node(6);
        tree_2.root.right.right = new Node(7);
        tree_2.root.right.right.left = new Node(81);
        tree_2.root.right.right.right = new Node(9);

        expect(treeIntersection(tree_1, tree_2)).toEqual([1,2,4,3,6,7,9]);
    });
   
  });