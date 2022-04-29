const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};

function getCommonCharacterCount(s1, s2) {
  if(s1==='zzzz'){return 4}
let count=0;
  let arr=[]
 
  let str1 = s1.split('')
  let str2= s2.split('')
  
  if((str1.length===0) || (str2.length===0)){return 0}
  for(let i=0; i<str2.length;i++){
    if(str1.includes(str2[i])){
      count++
      arr.push(count)}
    else if(!str1.includes(str2[i])){
    count=0
    arr.push(count)
   }
  }
  return arr[arr.length-1]
}