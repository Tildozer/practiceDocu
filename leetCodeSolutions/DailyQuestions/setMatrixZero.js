var setZeroes = function (matrix) {
  const rows = new Set();
  const columns = new Set();
  for (let i = 0; i < matrix.length; i++) {
    const currRow = matrix[i];
    for (let j = 0; j < currRow.length; j++) {
      if (currRow[j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  for (const row of rows) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
  for (const col of columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
};
