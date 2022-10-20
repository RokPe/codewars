function isIsogram(str){
    let arr = str.split('').map(x => x.toLowerCase())
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).length === str.length ? true : false
  }