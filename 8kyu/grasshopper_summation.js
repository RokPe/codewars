var summation = function (num) {
    let total = 0
    for(let i = 0; i <= num; i++) {
      total += i
    }
    return total
  }

//ES6
let summation = num => {
  let total = 0
  for(let i = num; i > 0; i--) {
    total += i
  }
  return total
}

//alternative solution using array
var summation = function (num) {
  let total = []
  for(num; num > 0; num--) {
    total.push(num)
  }
  return total.reduce((a, c) => a += c, 0)
}