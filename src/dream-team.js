const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};

function createDreamTeam(members){
  if(!Array.isArray(members)){return false}
   let newArr = []
   members.forEach(item =>{
      if(typeof item==='string'){
      item=item.replace(/\s/g, '').toUpperCase()
      newArr.push(item[0])
    } 
  })
  return newArr.sort().join('')
}