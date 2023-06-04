#include <vector>
#include <map>

using namespace std;

int firstDuplicateValue(vector<int> array) { 
  map<int, bool> nonDupValues = {};
  for(int i = 0; i < array.size(); i++) {
    int current = array[i];
    if(!nonDupValues[current]) {
      nonDupValues[current] = true;
    } else {
      return current;
    }
  }
  return -1; 
}
