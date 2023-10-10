
// You should implement your task here.

module.exports = function towelSort (matrix) {
if ( matrix !== undefined ) {
  if (matrix.length > 0) {
    for (let i = 1; i <= matrix.length / 2 + 1; i = i + 2) {
      matrix[i].reverse();
      console.log(matrix[i])
    }
    return matrix.join(',').split(',').map(Number)
  }
    return []
  } else {
    return []
  }
}
