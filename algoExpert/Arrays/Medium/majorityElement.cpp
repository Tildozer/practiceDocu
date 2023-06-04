#include <map>

using namespace std;

int majorityElement(vector<int> array) {
  // Write your code here.
  map<int, int> numCheck = {};
  for(int i = 0; i < array.size(); i++) {
    if(!numCheck[array[i]]){
      numCheck[array[i]] = 1;
    } else {
      numCheck[array[i]]++;
    }
  }
  int greatestTimeSeen {};
  int mostCommon {};
  for(auto const& [key, val] : numCheck) {
    if(val > greatestTimeSeen) {
      greatestTimeSeen = val;
      mostCommon = key;
    }
  }
  return mostCommon;
}
