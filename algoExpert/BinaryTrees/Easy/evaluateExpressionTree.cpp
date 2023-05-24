#include <cmath>

using namespace std;

// This is an input class. Do not edit.
class BinaryTree {
public:
    int value;
    BinaryTree *left = nullptr;
    BinaryTree *right = nullptr;

    BinaryTree(int value) { this->value = value; }
};

int evaluateExpressionTree(BinaryTree *tree) {
  // Write your code here.
    if(tree->value >= 0){
        return tree->value;
    }

    const int leftValue =  evaluateExpressionTree(tree->left);
    const int rightValue =  evaluateExpressionTree(tree->right);
    if(tree->value == -1){
        return leftValue + rightValue;
    }
    if(tree->value == -2){
        return leftValue - rightValue;
    }
    if(tree->value == -3){
        double dividedValue = leftValue / rightValue;
        if(dividedValue > 0){
            return floor(dividedValue);
        } else {
            return ceil(dividedValue);
        }
    }
    if(tree->value == -4){
        return leftValue * rightValue;
    }
}
