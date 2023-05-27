using namespace std;

bool generateDocument(string characters, string document) {
  // Write your code here.
    map<char, int> charMap = {};
    for(int i = 0; i < characters.length(); i++) {
        if(!charMap[characters[i]]){
            charMap[characters[i]] = 1;
        } else {
            charMap[characters[i]]++;
        }
    }
    for(int i = 0; i < document.length(); i++) {
        char currChar = document[i];
        if(!charMap[currChar]){
            return false;
        } else {
            charMap[currChar]--;
        }
    }
    return true;
}
