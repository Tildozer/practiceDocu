#include <vector>
using namespace std;

vector<int> findThreeLargestNumbers(vector<int> array) {
  // Write your code here.
    vector<int> largest = {};
    largest.insert(largest.end(), { array[0], array[1], array[2] });
    sort(largest.begin(), largest.end());
    for(int i = 3; i < array.size(); i++) {
        int current = array[i];
        if(current > largest[2]) {
            largest[0] = largest[1];
            largest[1] = largest[2];
            largest[2] = current;
        } else if(current > largest[1]) {
            largest[0] = largest[1];
            largest[1] = current;
        } else if(current > largest[0]){
            largest[0] = current;
        }
    }
    return largest;
}
