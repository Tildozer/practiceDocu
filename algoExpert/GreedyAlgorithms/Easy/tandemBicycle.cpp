#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

int tandemBicycle(vector<int> redShirtSpeeds, vector<int> blueShirtSpeeds,
                  bool fastest) {
  // Write your code here.
  sort(redShirtSpeeds.begin(), redShirtSpeeds.end());
  sort(blueShirtSpeeds.begin(), blueShirtSpeeds.end());
  int totalSpeed {};
    for(int i = 0; i < redShirtSpeeds.size(); i++){
      int currentRed = redShirtSpeeds[i];
      int currentBlue = blueShirtSpeeds[blueShirtSpeeds.size() - 1 - i];
      if(!fastest){
        currentBlue = blueShirtSpeeds[i];
      }
      totalSpeed += max(currentRed, currentBlue);
    }
  return totalSpeed;
}
