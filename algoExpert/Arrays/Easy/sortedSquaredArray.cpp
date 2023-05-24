#include <vector>
using namespace std;

vector<int> _swap(vector<int> array, int currentNum, int previousIdx) {
  int previous = previousIdx;
  while(previous > -1 && currentNum < array[previous]){
    array[previous + 1] = array[previous];
    array[previous] = currentNum;
    previous--;
  }
  return array;
}

vector<int> sortedSquaredArray(vector<int> array) {
  // Write your code here.
    vector<int> newArray = {};
    for(int i = 0; i < array.size(); i++){
        int squaredCurrent = array[i] * array[i];
        if(i == 0){
            newArray.push_back(squaredCurrent);
            continue;
        }
        if(squaredCurrent > newArray[newArray.size() - 1]){
            newArray.push_back(squaredCurrent);
        } else {
            newArray.push_back(squaredCurrent);
            newArray = _swap(newArray, squaredCurrent, i - 1);
        }
    }
    sort(newArray.begin(), newArray.end());
  return newArray;
}
