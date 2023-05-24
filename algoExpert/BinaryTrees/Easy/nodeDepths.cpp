using namespace std;

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

void addDepths (BinaryTree *node, int depth, int &sum) {
    if(node != nullptr) {
        sum += depth;
        addDepths(node->left, depth + 1, sum);
        addDepths(node->right, depth + 1, sum);
    }
}

int nodeDepths(BinaryTree *root) {
  // Write your code here.
    int sum {};
    addDepths(root, 0, sum);
    return sum;
}
