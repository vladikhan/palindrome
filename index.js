function isPalindrome(numberAsString) {
  let characters = numberAsString.split('')
  let isPalindrome = true

  for (let index = 0; index < characters.length; index++) {
    const element = characters[index]
    if (element !== characters[characters.length - 1 - index]) {
      isPalindrome = false
    }
  }
  return isPalindrome
}
console.log(isPalindrome('10001'))
console.log(isPalindrome('111'))
console.log(isPalindrome('12345'))
console.log(isPalindrome('101010001'))
