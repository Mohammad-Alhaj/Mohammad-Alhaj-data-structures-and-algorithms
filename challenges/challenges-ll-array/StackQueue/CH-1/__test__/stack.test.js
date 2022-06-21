'use strict';

const Stack = require('../stack/stack');

describe('Stack Test',()=>{
   
    it("successfully push onto a stack",()=>{
        const ele = new Stack();
        ele.push(10);

        expect( ele.top.value).toEqual(10)
    })

    it("push multiple values onto a stack",()=>{
        const ele = new Stack();
        ele.push(10);
        ele.push(20);


        expect( ele.length).toEqual(2)
    })

    it(" pop off the stack",()=>{
        const ele = new Stack();
        ele.push(10);
        ele.push(20);
        ele.pop()
        expect( ele.length).toEqual(1)
        expect( ele.top.value).toEqual(10)

    })


    it("empty a stack after multiple pops",()=>{
        const ele = new Stack();
        ele.push(10);
        ele.push(20);
        ele.pop()
        ele.pop()

        expect( ele.top).toEqual(null)

    })


    it("peek the next item on the stack",()=>{
        const ele = new Stack();
        ele.push(10);
        ele.push(20);
        ele.push(30);
        
        expect( ele.peek()).toEqual(ele.top.value)

    })

    it("Check Is Empty ",()=>{
        const ele = new Stack();

        expect( ele.IsEmpty()).toEqual(true)

    })

    
    it("instantiate an empty stack",()=>{
        const ele = new Stack();
        ele.emptyStack(10)
        ele.emptyStack(20)
        ele.emptyStack(30)

        expect(ele).toEqual({"length": 0, "top": null})

    })

    it("instantiate an empty stack",()=>{
        const ele = new Stack();
   
        
        expect(ele.pop()).toEqual(false)

    })
})