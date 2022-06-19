"use strict";
const {linkedList} = require('./linked-list-zip/linkedlist');
// const LinkedList2 = require('./linked-list-zip/linkedlist');


const element = new linkedList();
const element2 = new linkedList();
const element3 = new linkedList();




console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//....//......//.....//....//......//......//.......//.......//........
element.append(1)
element.append(3)
element.append(7)
element.append(9)
 element2.append(10)
 element2.append(20)
 element2.append(30)


 
 console.log(element3.linkedListZip(element,element2).toString() );
 element3.printList(element3)
//  element.printList(element)
//  element2.printList(element2)

 
 element3.printList(element3)

//  console.log(element);
//  element.middle()

//  element.reverse()
//  element.kthFromEnd(23) 
//  element.insertAfter(3,50)

//  element.insertBefore(1,50 )






