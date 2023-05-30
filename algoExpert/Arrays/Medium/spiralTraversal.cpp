#include <vector>

using namespace std;

vector<int> spiral(vector<int> &nums, vector<vector<int>> array, int startCol, int startRow, int endCol, int endRow) {
    if(endRow < startRow || endCol < startCol){
        return nums;
    }
    for(int i = startCol; i < endCol; i++){
        nums.push_back(array[startRow][i]);
    }
    for(int i = startRow; i <= endRow; i++){
        nums.push_back(array[i][endCol]);
    }
    if(startRow != endRow){
        for(int i = endCol - 1; i > startCol; i--) {
            nums.push_back(array[endRow][i]);
        }
    }
    if(startCol != endCol) {
        for(int i = endRow; i > startRow; i--) {
            nums.push_back(array[i][startRow]);
        }
    }
    return spiral(nums, array, startCol + 1, startRow + 1, endCol - 1, endRow - 1);
}

vector<int> spiralTraverse(vector<vector<int>> array) {
  // Write your code here.
    vector<int> nums = {};
    return spiral(nums, array, 0, 0, array[0].size() - 1, array.size() - 1);
}