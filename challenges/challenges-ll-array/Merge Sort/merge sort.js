const mergeArrays = (a, b) => {
    const result = []
  
    while (a.length && b.length) {
        result.push(a[0] > b[0] ? b.shift() : a.shift())
    }
  
    while (a.length) {
        result.push(a.shift())
    }
    while (b.length) {
        result.push(b.shift())
    }
  
    return result
  }
  
  function mergeSort (a) {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return mergeArrays(sorted_l, sorted_r)
  }
  
  
  module.exports = mergeSort
  