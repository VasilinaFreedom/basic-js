const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

function encodeLine(string) {
  const arr=string
  const result = []
  let count=1
  if(arr.length===0){return ''}
  for(let i=0; i<arr.length; i++){ //сравниваем соседние буквы
      if(arr[i]!=arr[i-1]){ //если буквы разные
        count=1 //счетчик 1
       result.push([arr[i]])
     }
    else if(arr[i]===arr[i-1]){//если буквы одинаковые, то счетчик увеличиваем
      count++
      result.pop(arr[i])//удаляем промежуточные результаты
      result.push([count, arr[i]])

  }}
  return result.join().replace(/[\s.,%]/g, '')
}
