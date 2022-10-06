function basicOp(operation, value1, value2)
{
  if(operation === '+') {
    return value1 + value2
  }else if(operation === '-') {
    return value1 - value2
  }else if(operation === '*') {
    return value1 * value2
  }else {
    return value1 / value2
  }
}

// switch/case

function basicOp(operation, value1, value2)
{
  switch(operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
  }
}