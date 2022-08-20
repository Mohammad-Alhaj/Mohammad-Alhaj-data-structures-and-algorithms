class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    // returning the all the values  from the linkedList
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }



}

class HashTable {
    constructor(size){
        this.size = size;
        this.arr = new Array(size)
    }

    hash(key){
        let sum = key.split('').reduce((prev,curr)=>{
            return prev+ curr.charCodeAt(0);
        },0)

        let multipleNumber = sum *599;
        let indexNumber = multipleNumber % this.size;
      
        return indexNumber
    }

    set (key,value) {
        let hash = this.hash(key);

        if(!this.arr[hash]){
            this.arr[hash] = new LinkedList()
        }
        this.arr[hash].append({[key]:value})
    }

    get(key){
        let hash = this.hash(key)
        
        if(this.arr[hash]){
        
            let curr = this.arr[hash].head
            while(curr) {
                if( Object.keys(curr.value)[0] === key){

                    return curr.value     
                }
                curr = curr.next
            }
            return 'The key it is not exist'

        }
        return 'The key it is not exist'
    }

    contains(key){
        let hash = this.hash(key)
        
        if(this.arr[hash]){
        
            let curr = this.arr[hash].head
            while(curr) {
                if( Object.keys(curr.value)[0] === key){

                    return true   
                }
                curr = curr.next
            }
            return false

        }
        return false
    }

    keys(){
        let arrayOfKeys = []
        for (const iterator of this.arr) {
            let curr = iterator;
            if(curr)
          while(curr.head){

               arrayOfKeys.push(Object.keys(curr.head.value)[0])
               curr.head = curr.head.next
             }
          }

        return arrayOfKeys

    }

}

const myhashmap = new HashTable(10);
myhashmap.set('esam', '401d15 student');
myhashmap.set('ahmad', '401d15 student');
myhashmap.set('mohamad', '401d15 student');
myhashmap.set('samah', '401d15 student');
myhashmap.set('laith', '401d15 student');
myhashmap.set('shihab', '401d15 student');


console.log(myhashmap.keys())


module.exports = {

    HashTable
}

