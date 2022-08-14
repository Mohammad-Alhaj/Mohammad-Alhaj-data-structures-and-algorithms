
const quickSort = require('../quicksort')



describe('', () => {
    test('Reverse-sorted', () => {
      expect(quickSort([-5,-88,1,2,44,88,66,4])).toEqual([-88, -5,  1,  2,4, 44, 66, 88]);
    });
})