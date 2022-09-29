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