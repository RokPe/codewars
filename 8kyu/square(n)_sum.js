function squareSum(numbers){
    return numbers.reduce((a, c) => a += Math.pow(c, 2), 0)
  }

//one liner
let squareSum = numbers => numbers.reduce((a, c) => a += Math.pow(c, 2), 0)

//alternative
function squareSum(numbers){
  return numbers.reduce((a, c) => a += c * c, 0)
}