function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("Ramesh"));
console.log(isPalindrome("AnanA"));
console.log(isPalindrome("A car, a man, a maraca"));