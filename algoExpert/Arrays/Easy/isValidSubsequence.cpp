#include <vector>
using namespace std;

bool isValidSubsequence(vector<int> array, vector<int> sequence) {
  // Write your code here.
  int sequenceStart {};
  for(int i = 0; i < array.size(); i++){
    int current = array[i];
    if(current == sequence[sequenceStart]){
      sequenceStart++;
    }
  }
  return sequenceStart == sequence.size();
}
