function partition(arr, left, right) {
    const pivotVal = arr[right]; 
    let index = left;
    for (let i = index; i < right; i++) {
      if (arr[i] < pivotVal) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index += 1;
      }
    }
  
    [arr[index], arr[right]] = [arr[right], arr[index]];
    return index;
  }
  
  function quickSort(arr, left, right) {
    if (left >= right) {
      return;
    }
  
    let midIndex = partition(arr, left, right);
  
    quickSort(arr, left, midIndex - 1);
    quickSort(arr, midIndex + 1, right);
 
    return arr
  }
  

  module.exports = quickSort