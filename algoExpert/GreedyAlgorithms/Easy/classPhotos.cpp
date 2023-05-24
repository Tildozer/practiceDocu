#include <vector>
#include <algorithm>
using namespace std;

bool classPhotos(vector<int> redShirtHeights, vector<int> blueShirtHeights) {
  // Write your code here.
  sort(redShirtHeights.begin(), redShirtHeights.end());
  sort(blueShirtHeights.begin(), blueShirtHeights.end());

  bool blueShirtTaller = false;
  for(int i = 0; i < redShirtHeights.size(); i++){
      int currentRedShirt = redShirtHeights[i];
      int currentBlueShirt = blueShirtHeights[i];
      if(currentRedShirt == currentBlueShirt){
          return false;
      }
      if(i == 0){
          if(currentBlueShirt > currentRedShirt){
            blueShirtTaller = true;
          }
      }
      if((blueShirtTaller && currentRedShirt > currentBlueShirt) 
        || (!blueShirtTaller && currentBlueShirt > currentRedShirt)){
          return false;
      }
    }
    return true;
}
