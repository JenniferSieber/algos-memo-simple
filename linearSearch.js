// Linear Search Task: Implement linear search
// Linear Search  ---- time complexity linear 
// Search for a value in an array by checking each value in order.

function linearSearch(list, item) {
  // list = list.sort((a,b) => a - b) if not a sorted list
  for (let i = 0; i < list.length; i++) {
    console.log('index: ',i)
    let element = list[i]
    if (element === item) {
      return `index: ${i} & element: ${element}`
    } 
  }
}
console.log(linearSearch([2,6,7,90,103], 90))


// Warning: forEach can be larger than Linear Time Complexity based  on callback operations (in body) of the forEach. With this example we are doing 
// constant time operations like: comparison check assigning variable
// If callback is NOT constant time operation--- Time Complexity is changed -more complex
function linearSearchForEach(list, item) {
  let index = -1;  // -1 means not found with searches
  list.forEach((el, i) => {
    if (el === item) {  
      index = i 
    }
  })
  return index
}
console.log(linearSearchForEach([2,6,7,90,103], 90))