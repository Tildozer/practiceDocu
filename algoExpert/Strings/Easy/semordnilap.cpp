#include <string>
using namespace std;

string reverseWord(string word) {
  string newWord = "";
  for(int i = word.length() - 1; i > -1; i--){
    newWord += word[i];
  }
  return newWord;
}

vector<vector<string>> semordnilap(vector<string> words) {
  // Write your code here.
    vector <vector <string>> semordnilaps = {};
    map<string, bool> wordCheck = {};
    for(int i = 0; i < words.size(); i++) {
        string copy = words[i];
        string reversedWord = reverseWord(copy);
        if(wordCheck[reversedWord]){
            semordnilaps.push_back({copy, reversedWord});
        } 
        wordCheck[copy] = true;
    }
    return semordnilaps;
}

