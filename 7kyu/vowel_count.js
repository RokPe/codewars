function getCount(str) {
    let vowels = 'aeiou'
    let arr = str.split('')
    let total = 0
    for(let i = 0; i < arr.length; i++) {
      if(vowels.includes(arr[i])) {
        total += 1
      }
    }
    return total
  }

//alternative solution
function getCount(str) {
    return str.split('').filter(x => 'aeiou'.includes(x)).length
  }

//one line solution
let getCount = str => str.split('').filter(x => 'aeiou'.includes(x)).length

//regex solution
function getCount(str) {
  return str.replace(/[^aeiou]/gi,'').length
}

//one line regex solution
let getCount = str => str.replace(/[^aeiou]/gi,"").length