


module.exports = function towelSort(matrix) {
  if (matrix === undefined)
  {
    return [];
  }
  let sortedArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let innerArray = matrix[i];
    if (i % 2 === 0) {
      for (let j = 0; j < innerArray.length; j++) {
        sortedArray.push(innerArray[j]);
      }
    } else {
      for (let j = innerArray.length - 1; j >= 0; j--) {
        sortedArray.push(innerArray[j]);
      }
    }
  }

  return sortedArray;
}
