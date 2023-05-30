#include <vector>

using namespace std;

int getProduct(vector<int> array, int i) {
    int product = 1;
    for(int j = i - 1; j > -1; j--) {
        product *= array[j];
    }
    for(int j = i + 1; j < array.size(); j++) {
        product *= array[j];
    }
    return product;
}

vector<int> arrayOfProducts(vector<int> array) {
  // Write your code here.
    vector <int> products = {};
    for(int i = 0; i < array.size(); i++) {
        products.push_back(getProduct(array, i));
    }
    return products;
}
