function removeChar(str){
    return str.slice(1, str.length - 1)
   };
   
//alternative solution

let removeChar = str => str.slice(1, -1)