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

// const calculateDepth=(arr)=>{
//   if (!Array.isArray(arr))
//       return 0;

//   let count = 0;
//   for (let item of arr)
//       count = Math.max(count, calculateDepth(item));
//   return 1 + count;
// }

// module.exports = class DepthCalculator {
    // calculateDepth=( arr )=> {
    //     let count = 1;
    //     let depth = 0;

    //     for (let key in arr) {
    //         if (Array.isArray(arr[key])) {
    //             count = this.calculateDepth(arr[key])
    //             if (depth < count) depth = count;
    //         }

    //     }
    //     return depth += 1;
    // }

// function calculateDepth(arr){
//   if (!Array.isArray(arr))
//       return 0;
//   let count = 0;
//   for (let item of arr)
//       count = Math.max(count, calculateDepth(item));
//   return 1 + count;
// }

