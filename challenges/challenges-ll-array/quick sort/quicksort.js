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
  
//   let arr = [-2, 4, 6, 3, 7, 2];
//   quickSort(arr, 0, arr.length - 1);
//   console.log(arr);

// quickSort([9,8,7,6,5])
  module.exports = quickSorthttps://github.com/Mohammad-Alhaj/resty/tree/effect-hook