q// Greedy Algorithms
// makeChange, that returns an integer that represents the least number of coins that add up to an amount equal to change required.

// coin values 5, 10, 25
// amount = 40  output 25, 10, 5 === 3 coins
// amount = 45  output 25, 10, 10 === 3 coins
// amount = 70  output 25, 25, 10, 10 = 4 coins 

// Her algo
const makeChange = (coins, amount) => {
  coins.sort((a,b) => b - a) // sort highest to lowest
  let coinTotal = 0
  let i = 0
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i]
      coinTotal++
    } else {
      i++
    }
  }
  return coinTotal
}
console.log('biancas', makeChange([25,5,10], 50))
console.log('biancas', makeChange([1,6,10], 12)) //returns 3 when could of returned 2 for (6,6) Breaks Greedy approach --- Go with Brute Force
