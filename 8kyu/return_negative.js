function makeNegative(num) {
    return num < 0 ? num : -num
  }

//alternative solution

function makeNegative(num) {
  return -Math.abs(num)
}

//one liner
let makeNegative = num => -Math.abs(num)