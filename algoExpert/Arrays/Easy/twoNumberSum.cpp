#include <vector>
#include <map>

using namespace std;

// Optimal solution
vector<int> twoNumberSum(vector<int> array, int targetSum) {
  // Write your code here.
    map<int, bool> nums = {};
    nums[array[0]] = true;
    for(int i = 1; i < array.size(); i++){
        int current = array[i];
        if(nums[targetSum - current]){
            return {targetSum - current, current};
        } else {
            nums[current] = true;
        }
    }
    return {};
}


// previous Solution in c++
#include <vector>

using namespace std;

vector<int> twoNumberSumDoubleForLoop(vector<int> array, int targetSum) {
  // Write your code here.
  // int arrayLength = sizeof(array) / sizeof(array[0]);
  int arrayLength = array.size();
  for(int i = 0; i < arrayLength; i++) {
    int current = array[i]; 
    for(int j = i + 1; j < arrayLength; j++) {
      if(current + array[j] == targetSum){
        return {current, array[j]};
      }  
    }
  }
  return {};
}
