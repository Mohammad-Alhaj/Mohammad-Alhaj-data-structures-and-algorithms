'use strict';

const mergeSort = require('../merge sort');

describe('Merge Sort Test', () => {
  test('Reverse-sorted', () => {
    expect(mergeSort([-5,-88,1,2,44,88,66,4])).toEqual([-88, -5,  1,  2,4, 44, 66, 88]);
  });
  test('Few uniques', () => {
    expect(mergeSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });
  test('Nearly-sorted', () => {
    expect(mergeSort([2,3,55,66,88,99])).toEqual([2,3,55,66,88,99]);
  });
});