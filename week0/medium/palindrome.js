/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newArr = []
  let secArr = []
  str = str.toLowerCase()
  // str.split(" ").join('')
  // str.split(",").join('')

  str = str.replace(/[^a-zA-Z0-9]/g, '')

  for(let i=0; i<Math.floor((str.length)/2)-1; i++){
    newArr.push(str[i])
  }
  for(let i=Math.ceil(str.length/2); i<str.length; i++){
    secArr.push(str[i])
  }
  if(newArr.join('') === secArr.reverse().join(''))
  {
    return true
  } else {
    return false
  }
}

module.exports = isPalindrome;