#include <limits>
#include <vector>

using namespace std;

int longestPeakHelper(int increment, int currIdx, int current, int previous, int &peakSize) {
    if(current < previous) {
        peakSize++;
        return currIdx + increment;
    } else {
        if(increment > 0) {
            return numeric_limits<int>::max();
        } else {
            return -1;
        }
    }
} 

int longestPeak(vector<int> array) {
  // Write your code here.

    if(array.size() < 4){
        return array.size();
    }
    int largestPeak {};
    for(int i = 1; i < array.size() - 1; i++) {
        int current = array[i];
        int left = i - 1;
        int right = i + 1;
        if(current > array[left] && current > array[right]) {
            int peakSize = 1;
            while(left > -1 || right < array.size()) {
                if(left > -1) {
                    left = longestPeakHelper(-1, left, array[left], array[left + 1], peakSize);
                }
                if(right < array.size()) {
                    right = longestPeakHelper(1, right, array[right], array[right - 1], peakSize);
                }
            }
            if(peakSize > largestPeak) {
                largestPeak = peakSize;
            }
        }
    }
    return largestPeak;
}