using namespace std;

int getNthFib(int n) {
  // Write your code here.
    vector<int> fibonacci = {};
    fibonacci.push_back(0);
    while(fibonacci.size() < n){
        if(fibonacci.size() == 1){
            fibonacci.push_back(1);
        } else {
            fibonacci.push_back(
                fibonacci[fibonacci.size() - 1] + fibonacci[fibonacci.size() - 2]
            );
        }
    
    }
    return fibonacci[fibonacci.size() - 1];
}
