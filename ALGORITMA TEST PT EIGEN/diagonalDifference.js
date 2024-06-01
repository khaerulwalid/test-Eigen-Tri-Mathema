function diagonalDifference(matrix) {
    let n = matrix.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
  
    for(let i = 0; i < matrix.length; i++) {
        let innerMatrix = matrix[i]
        for(let j = 0; j < innerMatrix.length; j++) {
            
            if(j === i) {
                diagonal1 += matrix[i][j]
            }

            if(j === matrix.length - (i+1)) {
                diagonal2 += matrix[i][j]
            }

            
        }
    }
  
    let difference = diagonal1 - diagonal2;
  
    return difference;
  }
  
 
  const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = diagonalDifference(matrix);
  console.log(result);
  