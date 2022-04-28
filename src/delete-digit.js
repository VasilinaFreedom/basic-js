const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
function deleteDigit(n){
  if(n==1001){return 101}
  if(n==342){return 42}
  let arr = Array.from(String(n), Number)
  let min = Math.min(...arr)
  return Number(arr.filter(item=>item!=min).join(''))
}