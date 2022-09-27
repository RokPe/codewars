function squareSum(numbers){
    return numbers.reduce((a, c) => a += Math.pow(c, 2), 0)
  }