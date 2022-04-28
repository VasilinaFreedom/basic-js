const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

function transform(arr){

  if(!Array.isArray(arr)){throw Error("'arr' parameter must be an instance of the Array!")}
  let arr1=[]
  let arr2= arr1.concat(arr)
  let newArr=[]
    arr2.forEach((item,index)=>{
       let i = index
    if(item=='--discard-next'){
      arr2[i+1]='next'
      newArr.push(item)
    }else if(item=='--double-prev'){
      item=arr2[i-1]
      newArr.push(item)
     }else if(item=='--double-next'){
      item=arr2[i+1]
      newArr.push(item)
    }else if(item=='--discard-prev'){
      // arr2[i-1]='prev'
      // newArr.push(item)
      // newArr.pop(item)
      newArr.pop(item)
    }else{
      newArr.push(item)
    }})
    newArr.forEach(item=>{
    if(typeof item==='number'){
      arr1.push(item)}})
    return arr1
    }