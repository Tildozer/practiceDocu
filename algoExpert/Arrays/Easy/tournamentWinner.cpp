#include <vector>
#include <string>
#include <map>

using namespace std;

string tournamentWinner(vector<vector<string>> competitions, vector<int> results) {
  // Write your code here.
    map<string, int> winnerPairs = {};
    string winner = "";
    for(int i = 0; i < competitions.size(); i++){
    int roundWinner {};
    if(results[i] == 0){
        roundWinner = 1;
    }
    string currWinner = competitions[i][roundWinner];
    if(!winnerPairs[currWinner]){
        winnerPairs[currWinner] = 1;
    } else {
        winnerPairs[currWinner]++;
    }
    if(winner.length() == 0){
        winner = currWinner;
    } else if(winnerPairs[currWinner] > winnerPairs[winner]) {
        winner = currWinner;
    }
    }
    return winner;
}
