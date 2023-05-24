using namespace std;

// This is an input struct. Do not edit.
class LinkedList {
public:
  int value;
  LinkedList *next = nullptr;

  LinkedList(int value) { this->value = value; }
};

LinkedList *removeDuplicatesFromLinkedList(LinkedList *linkedList) {
  // Write your code here.
  if(linkedList->next == nullptr){
    return linkedList;
  }
  if(linkedList->next->value == linkedList->value){
    linkedList->next = linkedList->next->next;
    removeDuplicatesFromLinkedList(linkedList);
  } else {
    removeDuplicatesFromLinkedList(linkedList->next);
  }
  
  return linkedList;
}
