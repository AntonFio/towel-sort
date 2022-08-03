
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
 } else {
    const arr = matrix.filter((item, index) => {
       if (index % 2 !== 0){
          item = item.reverse()
       }
       return item
    });
    const arr2 = arr.flat() 
    return arr2
 }
}
