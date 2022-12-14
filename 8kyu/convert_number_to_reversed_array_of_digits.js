function digitize(n) {
    return n.toString().split('').map(x => Number(x)).reverse()
  }

//one liner
let digitize = n => n.toString().split('').map(x => Number(x)).reverse()

//alternative #2
function digitize(n) {
  return n.toString().split('').map(x => +x).reverse()
}