function squareDigits(num){
    return Number(num.toString().split('').map(x => Math.pow(Number(x), 2)).join(''))
  }

//one liner
let squareDigits = num => parseInt(num.toString().split('').map(x => Math.pow(parseInt(x), 2)).join(''))