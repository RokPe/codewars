function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false
  }

//one liner
let isDivisible = (n, x, y) => (n % x === 0) && (n % y === 0) ? true : false

//even shorter one liner
let isDivisible = (n, x, y) => n % x === 0 && n % y === 0