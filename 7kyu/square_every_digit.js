function squareDigits(num){
    return Number(num.toString().split('').map(x => Math.pow(Number(x), 2)).join(''))
  }