#include <iostream>
#include <cmath>
#include <limits>

using namespace std;

class BST {
public:
  int value;
  BST *left;
  BST *right;

  BST(int val);
  BST &insert(int val);
};

int closestValueSearch(BST *tree, int target, int closest){
    if(tree == nullptr){
        return closest;
    }
    int newClosest = closest;
    int absolute = abs(tree->value - target);
    if(absolute < abs(closest - target)){ 
        newClosest = tree->value;
    }
    if(tree->value < target){
        return closestValueSearch(tree->right, target, newClosest);
    } else {
        return closestValueSearch(tree->left, target, newClosest);
    }
}

int findClosestValueInBst(BST *tree, int target) {
  // Write your code here.
    int max = numeric_limits<int>::max();
    if(target < 0){
        max = numeric_limits<int>::min();
    }
  
    return closestValueSearch(tree, target, max);
}
