// BRUTE FORCE Algorithms
// makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amt is always divisible by 5.

// coin values 5, 10, 25
// amount = 40  output 25, 10, 5 === 3 coins
// amount = 45  output 25, 10, 10 === 3 coins
// amount = 70  output 25, 25, 10, 10 = 4 coins 


// ****requires addition of edge cases
// algo
let recursionCounter = 0
// let coins = [1, 10, 6]

const makeChange = (value, i) => {
  recursionCounter++
  console.log(`recursion counter: ${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i)
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })
  return minCoins + 1
}
console.log('brute', makeChange([1,6,10], 12))
