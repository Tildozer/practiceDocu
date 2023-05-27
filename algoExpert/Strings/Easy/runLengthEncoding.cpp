using namespace std;

string runLengthEncoding(string str) {
  // Write your code here.
    string encoded = "";
    char currentChar = '\0';
    int amountOfChar {};
    for(int i = 0; i < str.length(); i++) {
        if(currentChar == '\0') {
        currentChar = str[i];
        }
        
        if(str[i] != currentChar || amountOfChar == 9) {
            if(amountOfChar){
                encoded += to_string(amountOfChar);
                encoded += currentChar;
            }
                currentChar = str[i];
                amountOfChar = 1;
        } else {
            amountOfChar++;
        }
        
        if(i == str.length() - 1){
            encoded += to_string(amountOfChar);
            encoded += currentChar;
        }
    }
    return encoded;
}
