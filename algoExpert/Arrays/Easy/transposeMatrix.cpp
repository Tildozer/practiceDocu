#include <vector>

using namespace std;

vector<vector<int>> transposeMatrix(vector<vector<int>> matrix) {
  // Write your code here.
  vector<vector<int>> flippedMatrix = {};
  for(int i = 0; i < matrix[0].size(); i++) {
    vector<int> currentRow = {};
    for(int j = 0; j < matrix.size(); j++) {
      currentRow.push_back(matrix[j][i]);
    }
    flippedMatrix.push_back(currentRow);
  }
  return flippedMatrix;
}
