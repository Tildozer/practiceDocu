using namespace std;

bool palindromeCheck(string str, int left, int right) { 
    if(left < 0) {
        return true;
    }

    if(str[left] != str[right]){
        return false;
    }
  return palindromeCheck(str, left - 1, right + 1);
}

bool isPalindrome(string str) {
    // Write your code here.
    int half = str.length() / 2;
    if(str.length() % 2 == 0) {
        return palindromeCheck(str, half - 1, half);
    } else {
        return palindromeCheck(str, half - 1, half + 1);
    }
}
