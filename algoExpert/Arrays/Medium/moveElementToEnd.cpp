#include <vector>

using namespace std;

vector<int> moveElementToEnd(vector<int> array, int toMove) {
  // Write your code here.
    int length = array.size();
    for(int i = 0; i < length; i++) {
        if(array[i] == toMove){
            array.erase(array.begin() + i);
            array.push_back(toMove);
            length--;
            i--;
        }
    }
    return array;
}
