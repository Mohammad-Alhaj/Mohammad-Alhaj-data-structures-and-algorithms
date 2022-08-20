'use strict';
const {HashTable} = require('./hashtable');




const myhashmap = new HashTable(10);
myhashmap.set('mohammad', '401d15 student');



describe('binaryTree',()=>{
    beforeEach(()=>{
    })

    test('Setting a key/value to your hashtable results in the value being in the data structure',()=>{
        myhashmap.set('dammahom', '401d15 student')
        expect(  myhashmap.arr[4].head.next.value).toEqual({'dammahom':'401d15 student'})

    })

    test('Retrieving based on a key returns the value stored',()=>{
    
        expect(  myhashmap.get('mohammad')).toEqual({'mohammad':'401d15 student'})

    })
    test('',()=>{
     
        expect(  myhashmap.get('moh')).toEqual('The key it is not exist')

    })
    test('Successfully returns null for a key that does not exist in the hashtable',()=>{
    
        expect( myhashmap.contains('mohammad')).toEqual(true)

    })
    
    test('Successfully returns a list of all unique keys that exist in the hashtable',()=>{
    
        expect( myhashmap.keys()).toEqual(['mohammad','dammahom'])

    })

    test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{

        expect(  myhashmap.arr[10]).toEqual( undefined)

    })

    test('Successfully hash a key to an in-range value',()=>{
    
        expect( myhashmap.hash('mohammad')).toEqual(4)

    })

})


