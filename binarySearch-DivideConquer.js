// Binary Searh
function binarySearch(list, item) {
  let min = 0
  let max = list.length - 1
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2)
    console.log(guess, list)
    if (list[guess] === item) {
      console.log('guess === item',guess, list)
      return guess
    }
    else {
      console.log('else',guess)
      if (list[guess]  < item) {
        console.log(min, max, list)
        min = guess + 1
      } 
      else {
        console.log(min, max, list)
        max = guess - 1
      }
    }
  }
  return -1
}
console.log(binarySearch([2,6,7,90,103], 90))