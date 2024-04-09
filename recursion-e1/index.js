// 4 steps for Recursion-----------------------------
// Step 1: When do you want loop to stop: base cases?
// Step 2: Identify recursive cases: work you want to do within the loop. 
//          *see Step 4
//Step 3:  Return where appropriated---- you can lose your data.
//Step 4: Write procedures for each case that brings you closer to base case.

// Loop Recursively N times:
const loopNTimes = n => {
  console.log('n===', n)
  if (n <= 1) {
    console.log('n', n)
    return 'complete'
  }
  console.log('n', n)
  return loopNTimes(n - 1)
}

console.log(loopNTimes(3)) 

// Log Numbers recursively:
function logNumbersRecursive(start, end) {
  console.log(`Recursively looping from start: ${start} until end: ${end} with function in function`)
  function recurse(i) {
    console.log('recurse fn index: ', i)
    if (i < end) {
      recurse(i + 1)
    }
  }
  recurse(start)
}

logNumbersRecursive(5, 25)


// recursively return computeFactorials:
function recursivelyComputeFactorial(num) {
  // base case
  if (num === 1) {
    console.log(num, 'Hitting the base case of one')
    return 1
  } else {
    console.log(`returning ${num} * recursivelyComputeFactorial(${num - 1})`)
    return num * recursivelyComputeFactorial(num - 1)
  }
}

console.log(recursivelyComputeFactorial(5))