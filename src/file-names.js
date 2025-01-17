const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};

function renameFiles(names) {
  let k = 1
for(let i=0; i< names.length; i++){
  let o=0
  if(names[o]===names[i+1]){
    names[i+1]=`${names[i+1]}(${k})`
    k++
  }else if(names[o+1]===names[o+3]){
    // k=k-1
    names[o+3]=`${names[o+3]}(1)`
  
 }
}
  return names
}