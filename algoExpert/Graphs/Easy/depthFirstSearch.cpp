#include <vector>
using namespace std;

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
public:
  string name;
  vector<Node *> children;

  Node(string str) { name = str; }

  vector<string> depthFirstSearch(vector<string> *array) {
    // Write your code here.
    this->search(*array, this);
    return *array;
  }

  void search(vector<string> &array, Node *node){
    if(node != nullptr){
      array.push_back(node->name);
      for(int i = 0; i < node->children.size(); i++){
        Node *child = node->children[i];
        this->search(array, child);
      }
    }
  }

  Node *addChild(string name) {
    Node *child = new Node(name);
    children.push_back(child);
    return this;
  }
};

class NodeFirstAttempt {
public:
  string name;
  vector<NodeFirstAttempt *> children;

  NodeFirstAttempt(string str) { name = str; }

  vector<string> depthFirstSearch(vector<string> *array) {
    // Write your code here.
    vector<NodeFirstAttempt *> nodes = {};
    nodes.push_back(this);
    while(nodes.size() != 0){
      NodeFirstAttempt *currentNode = nodes[nodes.size() - 1];
      nodes.pop_back();
      array->push_back(currentNode->name);
      for(int i = currentNode->children.size() - 1; i > -1; i--){
        NodeFirstAttempt *currChild = currentNode->children[i];
        nodes.push_back(currChild);
      }
    }
    return *array;
  }

  NodeFirstAttempt *addChild(string name) {
    NodeFirstAttempt *child = new NodeFirstAttempt(name);
    children.push_back(child);
    return this;
  }
};
