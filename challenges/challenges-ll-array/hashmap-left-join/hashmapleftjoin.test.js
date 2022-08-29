const HashTable = require('./hashmapleftjoin')








describe('Left Joins Test', () => {
    const hashMap1 = new HashTable(100);
    hashMap1.set('diligent', 'employed');
    hashMap1.set('outfit', 'grab');
  
    const hashMap2 = new HashTable(100);
    hashMap2.set('diligent', 'idle');
    hashMap2.set('C', 'jam');
  
    const hashmap = new HashTable(100)
  
    it('successfully return correct result', () => {
console.log(hashmap.leftJoin(hashMap1, hashMap2));
      expect(hashmap.leftJoin(hashMap1, hashMap2)).toEqual(
        [
            [ 'outfit', 'grab', null ],
            [ 'diligent', 'employed', { 'diligent': 'idle' } ]
          ]
      );
    });
  });