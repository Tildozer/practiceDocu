#include <vector>
using namespace std;

vector<vector<int>> threeNumberSum(vector<int> array, int targetSum) {
  // Write your code here.
    sort(array.begin(), array.end());
    vector<vector<int>> equalsTarget = {};
    for(int i = 0; i < array.size() - 2; i++) {
        int left = i + 1;
        int right = array.size() - 1;
        while(left < right){
            int total = array[i] + array[left] + array[right];
            if(total == targetSum){
                equalsTarget.push_back({ array[i], array[left], array[right] });
                right--;
                left++;
            } else if(total < targetSum) {
                left++;
            } else if(total > targetSum) {
                right--;
            }
        }
    }
    return equalsTarget;
}
