// ------------------Accumulator Recursive Loop Example: 
function jointElementsRecursive(array, joinString) {
  function recurse(index, resultsSoFar) { // scope closure vars
    resultsSoFar += array[index]
    if (index === array.length - 1) {  // base case
      return resultsSoFar
    } else {   
      return recurse(index + 1, resultsSoFar + joinString)
    }
  }
  return recurse(0, '')
}
console.log(jointElementsRecursive(['s', 'cr', 't cod', ' :) :)'], 'e'), 'recursive closure') // secret code :) :)

// -----------------Accumulator Interative Loop Examples

// -----with a loop and string only concatenation
function jointElementsLoop(array, joinString) {
  let resultsSoFar = ''
  for (let i = 0; i < array.length - 1; i++) {
    resultsSoFar += array[i] + joinString
  }
  return resultsSoFar + array[array.length - 1]
}
console.log(jointElementsLoop(['s', 'cr', 't cod', ' :) :)'], 'e'), 'for loop string concatenation') // secret code :) :)

// -------with a for loop and array .push() method .join() method
function jointElements(array, joinString) {
  let joinedArr = []
  for (let i = 0; i < array.length; i++) {
    let char = array[i]
    if (i != array.length - 1) {
      joinedArr.push(char + joinString)
    } else {
      joinedArr.push(char)
    }
  }
  return joinedArr.join('')
}
console.log(jointElements(['s', 'cr', 't cod', ' :) :)'], 'e'), 'for loop join') // secret code :) :)

// -------with map functional expression
const jointElementsMap = (arr, str) => arr.map((el, i) => (i != arr.length - 1) ? el + str : el).join('');
console.log(jointElementsMap(['s', 'cr', 't cod', ' :) :)'], 'e'), 'map join functional expression')
