#include <algorithm>

using namespace std;

int minimumWaitingTime(vector<int> queries) {
  // Write your code here.
  int waitTime {};
  int allWaitTimes {};
  sort(queries.begin(), queries.end());
  for(int i = 1; i < queries.size(); i++){
    int current = queries[i - 1];
    allWaitTimes += current;
    waitTime += allWaitTimes;
  }
  return waitTime;
}
