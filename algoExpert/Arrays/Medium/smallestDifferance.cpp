#include <vector>
#include <cmath>
using namespace std;


vector<int> smallestDifference(vector<int> arrayOne, vector<int> arrayTwo) {
  // Write your code here.
    sort(arrayOne.begin(), arrayOne.end());
    sort(arrayTwo.begin(), arrayTwo.end());
    int closestDistance = numeric_limits<int>::max();
    vector<int> closest = {};
    for(int i = 0; i < arrayOne.size(); i++){
        int currentNumOne = arrayOne[i];
        for(int j = 0; j < arrayTwo.size(); j++){
            int currentNumTwo = arrayTwo[j];
            int currDistance = abs(currentNumOne - currentNumTwo);
            if(currDistance < closestDistance){
                closestDistance = currDistance;
                closest = {};
                closest.push_back(currentNumOne);
                closest.push_back(currentNumTwo);
            }
        }
    }
    return closest;
}
