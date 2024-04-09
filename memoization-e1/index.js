// task 1:  write times10 function
const times10 = n =>( n * 10);


// task 2: write function using caching at global level
const globalCache = {}
const memoTimes10 = n => {
  if (n in globalCache) {
    console.log('Task 2: Fetching cached value for n', n)
    return globalCache[n]
  } else {
    console.log('Task 2: Calculating result calling times10 FN')
    let result = times10(n)
    globalCache[n] = result 
    return result
  }
}

console.log(memoTimes10(9)) // 90


// task 3: correct scope and use function closures with the call
const closureMemoTimes10 = n => {
  let cache = {}
  return (n) => {
    if (n in cache) {
      console.log('Task 3: Fetching local cache value for n', n)
      return cache[n]
    } else {
      console.log('Task 3: Calculating result calling times10 FN')
      let result = times10(n)
      cache[n] = result 
      return result
    }
  }
}

const exampleClosureA = closureMemoTimes10()
const exampleClosureB = closureMemoTimes10()

console.log('ClosureA', exampleClosureA(9)) // 90 
console.log('ClosureA', exampleClosureA(2)) // 20 

console.log('ClosureB', exampleClosureB(90)) // 900
console.log('ClosureB', exampleClosureB(20)) // 200 


// task 4: create fn that varies the result portion to now be variable, using function closures and local scope on cache
const  memoTimesVaries = v => {
  let cache = {}
  return (n) => {
    if (n in cache) {
      console.log('Task 4: Fetching from cache: ', n)
      console.log(cache)
      return cache[n]
    } else {
      console.log('Task 4: Calculating Result: ', n)
      let result = n * v
      cache[n] = result
      console.log(cache)
      return result
    }
  } 
}

const memoClosureTimesTen = memoTimesVaries(10)
const memoClosureTimesFive = memoTimesVaries(5)

console.log(memoClosureTimesTen(2))
console.log(memoClosureTimesTen(10))

console.log(memoClosureTimesFive(2))
console.log(memoClosureTimesFive(10))


// Task 5: Optimize to make code reusable so that different calculations can be use in same closure function by passing a callback fn (create 2nd fn for calculation to explore results)
const add10 = n => n + 10
const memoize = (cb) => {
  let cache = {}
  return (n) => {
    if (n in cache) {
      console.log('Task 5: Fetching from cache: ', n)
      //console.log(cache)
      return cache[n]
    } else {
      console.log('Task 5: Calculating Result: ', n)
      let result = cb(n)
      cache[n] = result
      //console.log(cache)
      return result
    }
  } 
}
// saving returning fn to variable and calling it with callback fn for unique calculation
const memoizedTimesTen = memoize(times10)
const memoizedAddTen = memoize(add10)

console.log(memoizedTimesTen(2))
console.log('Task 5 cached value on memoizedTimes10', memoizedTimesTen(2))
console.log(memoizedAddTen(2))
console.log('Task 5 cached value on memoizedAdd10', memoizedAddTen(2))

console.log('Time and Space complexity similar through out the different examples. The result is a CONSTANT TIME. When we do the cb to the FN for calculation: that is a CONSTANT TIME. ')
