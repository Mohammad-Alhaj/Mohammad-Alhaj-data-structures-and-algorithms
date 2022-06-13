'use strict';
const linkedList = require('../implementation/linke.node');
describe("linkedList",()=>{
    test(" add a node to the end of the linked list",()=>{
        const linked = new linkedList();
        linked.append(1)
        linked.append(2)

        expect(linked.tail.value).toEqual(2)
    });
    test("add multiple nodes to the end of a linked list",()=>{
        const linked = new linkedList();
        linked.append(1)
        linked.append(2)
  

        expect(linked.length).toEqual(2)
    });
    test("insert a node before a node located i the middle of a linked list",()=>{
        const linked = new linkedList();
        linked.append(1)
        linked.append(2)
        linked.append(5)
        linked.insertBefore(2,50)
        let values = linked.head.next.value
        expect(values).toEqual(50)
    });
    test(" insert a node before the first node of a linked list",()=>{
        const linked = new linkedList();
        linked.append(1)
        linked.append(2)
        linked.append(5)
        linked.insertBefore(1,50)
  
        let values = linked.head.value

        expect(values).toEqual(50)

    });

    test("insert after a node in the middle of the linked list",()=>{
        const linked = new linkedList();
       linked.append(1)
       linked.append(2)
       linked.append(5)
        linked.insertAfter(2,50)
   

        let values = linked.head.next.next.value
  

        expect(values).toEqual(50)

    });
    test("insert a node after the last node of the linked list",()=>{
        const linked = new linkedList();
       linked.append(1)
       linked.append(2)
        linked.insertAfter(2,50)
   
        let values = linked.head.next.next.value
  
        expect(values).toEqual(50)

    });





})