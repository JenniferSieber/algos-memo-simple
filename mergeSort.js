// Merge Sort --- Divide and Conquer technique with recursion until we hit base case which is an list length 1. Compare the arrays item by item and return the concatenated result

// Split the array into halves and merge them recursively
function mergeSort(arr) {
  // base case
  if (arr.length === 1) {
    // rturn once we hit base case
    return arr
  }

  // divide array by the middle to two arrays
  const middle = Math.floor(arr.length / 2)  // get middle of array rounded down
  const left = arr.slice(0, middle)  // left side of array
  const right = arr.slice(middle)   // right side of array
  // Recursive calls until base cases are met
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // call to the compare arrays and concatenate
  return merge(sortedLeft, sortedRight)
}

// compare the arrays item by item and return the concatenated result
// Forking recursion
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
console.log(mergeSort(arrayRandom))