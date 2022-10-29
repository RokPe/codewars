function getMiddle(s)
{
  if(s.length % 2 !== 0) {
    return s.split('')[Math.floor(s.length/2)]
  }else {
    return `${s.split('')[Math.floor(s.length/2 - 1)]}${s.split('')[Math.floor(s.length/2)]}`
  }
}

//alternative solution
function getMiddle(s)
{
  if(s.length % 2 !== 0) {
    return s[Math.floor(s.length/2)]
  }else {
    return s.slice(s.length/2 - 1, s.length/2 + 1)
  }
}

//alternative #2
function getMiddle(s) {
  let len = s.length
  if(len % 2 !== 0) {
    return s[Math.floor(len/2)]
  }else {
    return s.slice(len/2 - 1,len/2 + 1)
  }
}