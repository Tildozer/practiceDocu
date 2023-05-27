#include <vector>
#include <cmath>
using namespace std;


#include <vector>
#include <cmath>
using namespace std;

int helper(vector<int> array, int target, int left, int right) {
    while(left <= right){
        int middle = floor((left + right) / 2);
        int potentialMatch = array[middle];
        if(target == potentialMatch){
            return middle;
        } else if(target < potentialMatch){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

int binarySearch(vector<int> array, int target) {
  // Write your code here.
    return helper(array, target, 0, array.size() - 1);
}


int findNumber(vector<int> array, int target, int leftIdx, int rightIdx ) {
    if(leftIdx < 0 && rightIdx > array.size() - 1){
        return -1;
    }
    if(leftIdx > -1) {
        if(array[leftIdx] == target) {
        return leftIdx;
        }
    }
    if(rightIdx < array.size()){
        if(array[rightIdx] == target){
            return rightIdx;
        }
    }
  
    return findNumber(array, target, leftIdx - 1, rightIdx + 1);
}

int binarySearchUnoptimal(vector<int> array, int target) {
  // Write your code here.
    int middle = floor(array.size() / 2);
    if(array[middle] == target){
        return middle;
    }
    return findNumber(array, target, middle - 1, middle + 1);
}
