using namespace std;

int firstNonRepeatingCharacter(string string) {
  // Write your code here.
    map<char, int> charMap = {};
    for(int i = 0; i < string.length(); i++){
        if(!charMap[string[i]]){
            charMap[string[i]] = 1;
        } else {
            charMap[string[i]]++;
        }
    }
    for(int i = 0; i < string.length(); i++){
        if(charMap[string[i]] == 1){
            return i;
        }
    }
    return -1;
}
