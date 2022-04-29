const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

function repeater(str, options) {
  const arr=Object.values(options)
  console.log(arr)
  let addi=(`${arr[2]}${arr[4]}`).repeat(arr[3]-1)
  let addiSep=(`${addi}${arr[2]}`)
  // return addiSep
  return (`${str}${addiSep}${arr[1]}`).repeat(arr[0])
  
}

function repeater(str, options) {
  let op= `${options.separator}`
  if(op=='undefined'){op='+'}
 if(options.additionSeparator===undefined){options.additionSeparator='|'}
  let addi=(`${options.addition}${options.additionSeparator}`).repeat(options.additionRepeatTimes-1)
  let addiSep=(`${addi}${options.addition}`)

  let strSep=(`${str}${addiSep}${op}`)
  let result0 = strSep.repeat(options.repeatTimes-1)
  let result=`${result0}${str}${addiSep}`
  let res = result.replace(/undefined/gi, '')
  return res

}