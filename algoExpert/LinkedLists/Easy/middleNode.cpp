#include <cmath>
using namespace std;

// This is an input struct. Do not edit.
class LinkedList {
public:
    int value;
    LinkedList *next = nullptr;

    LinkedList(int value) { this->value = value; }
};

int findLength(int currLength, LinkedList *linkedList) {
    if(linkedList == nullptr){
        return currLength;
    } 
    return findLength(currLength + 1, linkedList->next);
}

LinkedList *getMiddle(LinkedList *linkedList, int half, int idx) {
    if(idx == half){
        return linkedList;
    }
    return getMiddle(linkedList->next, half, idx + 1);
}

LinkedList *middleNode(LinkedList *linkedList) {
  // Write your code here.
    int length = findLength(0, linkedList);
    int half = floor(length / 2);
    return getMiddle(linkedList, half, 0);
}
