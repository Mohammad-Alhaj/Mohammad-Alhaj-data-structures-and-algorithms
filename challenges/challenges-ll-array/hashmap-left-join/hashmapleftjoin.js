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
    //********************************************************************************* */
           // challenge 33 left Join

         leftJoin(hash_1,hash_2) {
   
          let Array1 = [];
          for (const iterator of hash_1.arr) {
          
            if (iterator !== undefined) {
                let Array2 = [];
                let key = (Object.keys(iterator.head.value)[0]);
                Array2.push(key);
                Array2.push(iterator.head.value[key]);
                if (hash_2.contains(key)) {
                    Array2.push(hash_2.get(key));
                } else {
                    Array2.push(null);
                }
                Array1.push(Array2);
            }
        }
        return Array1;}

}



module.exports =  HashTable


