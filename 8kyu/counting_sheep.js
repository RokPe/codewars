function countSheeps(arrayOfSheep) {
    let total = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] === true) {
        total += 1
      }
    }
    return total
  }

//alternative solution
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(x => x === true).length
  }

//one liner
let countSheeps = arrayOfSheep => arrayOfSheep.filter(x => x === true).length