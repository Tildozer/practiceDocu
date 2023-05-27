#include <vector>
using namespace std;

vector<int> sorting(vector<int> array, bool isSorted) {
  if(isSorted) {
    return array;
  }
  isSorted = true;
  for(int i = 1; i < array.size(); i++){
    if(array[i] < array[i - 1]) {
      swap(array[i], array[i - 1]);
      isSorted = false;
    }
  }
  return sorting(array, isSorted);
}

vector<int> bubbleSort(vector<int> array) {
  // Write your code here.
  return sorting(array, false);
}