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
  calculateDepth(arr) {
    let count = 1;
    let depth = 0;
      for (let item in arr) {
          if (Array.isArray(arr[item])) {
              count = this.calculateDepth(arr[item])
              if (depth < count) depth = count;
          }

      }
      return depth += 1;
  }
  }


module.exports = {
  DepthCalculator
};


