const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayReverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Bubble Sort
// Implement a bubble sort ---loops through array and bubbles up the highest value each time example without optimization
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSortBasic(array) {
  let countOuter = 0
  let countInner = 0
  let countSwap = 0
  for (let i = 0; i < array.length; i++) {
    countOuter++
    for (let j = 1; j < array.length; j++) {
      countInner++
      if (array[j -1] > array[j]) {
        countSwap++
        swap(array, j - 1, j)
      }
    }
  }
  console.log('outer: ', countOuter, 'inner: ', countInner, 'swap: ', countSwap)
  return array
}
console.log('bubble sort = not optimized, lists are random, ordered and reverse')
console.log(bubbleSortBasic(arrayRandom))
console.log(bubbleSortBasic(arrayOrdered))
console.log(bubbleSortBasic(arrayReverse))

// OPTIMIZED VERSION Bubble Sort
function bubbleSort(array) {
  let countOuter = 0 // for education purposes -not required
  let countInner = 0 // for education purposes -not required
  let countSwap = 0  // for education purposes -not required
  let swapped;

  do {
    countOuter++
    swapped = false
    for (let i = 0; i < array.length; i++) {
      countInner++
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++
        swap(array, i, i + 1)
        swapped = true
      }
    }
  } while(swapped)
  console.log('outer: ', countOuter, 'inner: ', countInner, 'swap: ', countSwap)
  return array
}

console.log('bubble sort = optimized, lists are random, ordered and reverse')
console.log(bubbleSort(arrayRandom))
console.log(bubbleSort(arrayOrdered))
console.log(bubbleSort(arrayReverse))