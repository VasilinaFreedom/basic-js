const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};

function calculateDepth(arr){ 
  let count=1
  let a=[]
  for(let i=0; i<50; i++){
  if(typeof arr[i]==='object'){
    count++
    arr=arr.flat(1)
    a.push(arr[i])
    
  }
}
  //   console.log(typeof arr[5])
  // return arr.flat(5)
  // return count
  return a

}