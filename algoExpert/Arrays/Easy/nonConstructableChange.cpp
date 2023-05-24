#include <vector>
using namespace std;

int nonConstructibleChange(vector<int> coins) {
  // Write your code here.
  sort(coins.begin(), coins.end());
  int minChange {};
  for(int i = 0; i < coins.size(); i++){
    if(coins[i] <= minChange + 1){
      minChange += coins[i];
    } else {
      return minChange + 1;
    }
  }
  return minChange + 1;
}
