function highAndLow(numbers){
    return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
  }

//one liner
let highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`