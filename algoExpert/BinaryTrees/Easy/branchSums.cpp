// This is the class of the input root. Do not edit it.
class BinaryTree {
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;

  BinaryTree(int value) {
    this->value = value;
    left = nullptr;
    right = nullptr;
  }
};


void sumBranches(BinaryTree *node, vector<int> &sums, int currSum) {
  
    if(node != nullptr){
        int newSum = currSum + node->value;
        if(node->left == nullptr && node->right == nullptr){
            sums.push_back(newSum);
        }
        sumBranches(node->left, sums, newSum);
        sumBranches(node->right, sums, newSum);
    }
}

vector<int> branchSums(BinaryTree *root) {
    vector <int> allSums = {};
    sumBranches(root, allSums, 0);
    return allSums;
}