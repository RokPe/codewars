function descendingOrder(n){
    return Number(n.toString().split('').map(x => Number(x)).sort((a, b) => b - a).join(''))
  }

//alternative solution
function descendingOrder(n){
  return +n.toString().split('').sort((a, b) => b - a).join('')
}