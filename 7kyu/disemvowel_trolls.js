function disemvowel(str) {
    return str.split('').filter(x => !'aeiouAEIOU'.includes(x)).join('')
  }