#include <set>
#include <vector>
#include <string>
using namespace std;

vector<string> commonCharacters(vector<string> strings) {
  // Write your code here.
    vector<string> commonChars = {};
    set<char> letters = {};
    for(int i = 0; i < strings.size(); i++){
        for(int j = 0; j < strings[i].length(); j++){
           letters.insert(strings[i][j]);
        }
    }
    for(char letter: letters){
        int itemCount {};
        for(int i = 0; i < strings.size(); i++){
            if(strings[i].find(letter) != string::npos){
                itemCount++;
                if(itemCount == strings.size()){
                    string lett = "";
                    lett += letter;
                    commonChars.push_back(lett);
                }
            }
            if(i == strings.size() - 1){
                itemCount = 0;
            }
        }
  }
  return commonChars;
}
