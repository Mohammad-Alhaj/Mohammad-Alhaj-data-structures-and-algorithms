'use strict'

const Queue = require('../queue/queue')

describe('queue Test',()=>{
    it('enqueue into a queue',()=>{
        const ele = new Queue();
        ele.enqueue(10)
        expect(ele.rear.value).toEqual(10)
    })

    it(' enqueue multiple values into a queue',()=>{
        const ele = new Queue();
        ele.enqueue(10)
        ele.enqueue(20)

        expect(ele.length).toEqual(2)
    })

    it(' dequeue out of a queue the expected value',()=>{
        const ele = new Queue();
        ele.enqueue(10)
        ele.enqueue(20)
        ele.dequeue()

        expect(ele.front.value).toEqual(20)
    })

    it(' peek into a queue, seeing the expected value',()=>{
        const ele = new Queue();
        ele.enqueue(10)
        ele.enqueue(20)
        ele.peek()

        expect(ele.front.value).toEqual(10)
    })

    it(' empty a queue after multiple dequeues',()=>{
        const ele = new Queue();
        ele.enqueue(10)
        ele.enqueue(20)
        ele.dequeue()
        ele.dequeue()

        expect(ele.front).toEqual(null)
    })

    it('instantiate an empty queue',()=>{
        const ele = new Queue();
   
        expect(ele.IsEmpty()).toEqual(true)
    })

    it('instantiate an empty queue',()=>{
        const ele = new Queue();
        ele.emptyQueue(20)
        ele.emptyQueue(30)
        ele.emptyQueue(40)

        expect(ele).toEqual({"front": null, "length": 0, "rear": null})
    })

    it('Calling dequeue or peek on empty queue raises exception',()=>{
        const ele = new Queue();
     
        expect(ele.dequeue()).toEqual(false)
    })
})