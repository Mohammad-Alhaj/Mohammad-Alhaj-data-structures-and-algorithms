'use strict';
const {linkedList} = require('../linkedlist');




describe('ZipLinkedList',()=>{

    it('zip linked list',()=>{
        const element = new linkedList()
        const element2 = new linkedList();
        const element3 = new linkedList();

        element.append(2);
        element.append(4);
        element2.append(10);
        element2.append(20);

        expect(element3.linkedListZip(element,element2).toString()).toEqual("{2} -> {10} -> {4} -> {20} -> null")
    })
    it('all list are null',()=>{
        const element = new linkedList()
        const element2 = new linkedList();
        const element3 = new linkedList();

        // element.append(2);
        // element.append(4);
        // element2.append(10);
        // element2.append(20);

        expect(element3.linkedListZip(element,element2).toString()).toEqual("null")
    })
    it('list 2 is null',()=>{
        const element = new linkedList()
        const element2 = new linkedList();
        const element3 = new linkedList();

        element.append(2);
        element.append(4);
    

        expect(element3.linkedListZip(element,element2).toString()).toEqual( "{2} -> {4} -> null")
    })
    it('zip linked list ',()=>{
        const element = new linkedList()
        const element2 = new linkedList();
        const element3 = new linkedList();

        element.append(2);
        element.append(4);
        element.append(7);
        element2.append(50);

    

        expect(element3.linkedListZip(element,element2).toString()).toEqual( "{2} -> {50} -> {4} -> {7} -> null")
    })
    
})