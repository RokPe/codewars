function isIsogram(str){
    let arr = str.split('').map(x => x.toLowerCase())
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).length === str.length ? true : false
  }

//improved
function isIsogram(str){
    let strArr = str.split('').map(x => x.toLowerCase())
    return strArr.filter(x => strArr.indexOf(x) === strArr.lastIndexOf(x)).length === strArr.length
  }
  