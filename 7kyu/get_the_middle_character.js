function getMiddle(s)
{
  if(s.length % 2 !== 0) {
    return s.split('')[Math.floor(s.length/2)]
  }else {
    return `${s.split('')[Math.floor(s.length/2 - 1)]}${s.split('')[Math.floor(s.length/2)]}`
  }
}