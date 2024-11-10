class Solution {
public:
    long long minEnd(int n, int x) {
      long long lastMinNum = x;

      for(int i = 1; i < n; i++) {
        lastMinNum = (lastMinNum + 1) | x;
      } 
      return lastMinNum; 
    }
};