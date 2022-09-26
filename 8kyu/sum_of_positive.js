function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, c) => a += c, 0)
  }

//alternative solution

function positiveSum(arr) {
  return arr.reduce((a, c) => a += c > 0 ? c : 0, 0)
}