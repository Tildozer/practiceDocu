#include <vector>
using namespace std;

vector<int> selectionSort(vector<int> array) {
  // Write your code here.
  int unsortedIdx {};
  while(unsortedIdx < array.size()){
    int smallestIdx = unsortedIdx;
    for(int i = unsortedIdx; i < array.size(); i++) {
      if(array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    swap(array[smallestIdx], array[unsortedIdx]);
    unsortedIdx++;
  }
  
  return array;
}
