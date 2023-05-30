#include <vector>
using namespace std;

vector<vector<int>> mergeOverlappingIntervals(vector<vector<int>> intervals) {
  // Write your code here.
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> allPairs = {};
    vector<int> recentPair = intervals[0];
    for(int i = 1; i < intervals.size(); i++) {
        vector<int> current = intervals[i];
        if(recentPair[1] < current[0] && recentPair[1] < current[1]){
            allPairs.push_back(recentPair);
            recentPair = current;
        } else {
            if(current[1] > recentPair[1]){
                recentPair[1] = current[1];
            }
        }
        if(i == intervals.size() - 1){
            allPairs.push_back(recentPair);
        }
    }
    return allPairs;
}
