#include <vector>

using namespace std;

bool isMonotonic(vector<int> array) {
  // Write your code here.
    if(array.size() < 3) {
        return true;
    }
    bool increasing = true;
    bool foundDifference = false;
    for(int i = 1; i < array.size(); i++) {
        int current = array[i];
        int previous = array[i - 1];
        if(i == 1 || !foundDifference){
            if(previous == current){
                continue;
            } else if(previous > current){
                increasing = false;
            }
            foundDifference = true;
        } else {
            if((increasing && current < previous) || (!increasing && current > previous )) {
                return false;
            }
        }
    }
    return true;
}