/*
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round robin, where each team faces off against all other teams.
Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team.
In each competition there's always one winner and one loser; there are no ties.
A team receives 3 points if it wins and 0 points if it loses.
The winner of the tournament is the team that receives the most amount of points.
Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament.
The input arrays are named competitions and results, respectively.
The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team.
The results array contains information about the winner of each corresponding competition in the competitions array. 
Specifically, results [i] denotes the winner of competitions [i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.
It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once.
It's also guaranteed that the tournament will always have at least two teams.
*/

// GO BACK AND WATCH VIDEO SOLUTION

// MY SOLUTION
function tournamentWinner(competitions, results) {
    // Write your code here.
    const winnerObj = {}
    let winner = ""
    for (let i = 0; i < competitions.length; i++) {
      const roundWinner = competitions[i][results[i] ? 0 : 1]
      if(!winnerObj[roundWinner]){
        winnerObj[roundWinner] = 3;
        !winner ?
          winner = roundWinner
        : null
      } else {
        winnerObj[roundWinner] += 3;
        if(winnerObj[roundWinner] > winnerObj[winner]){
          winner = roundWinner
        }
      }
    }
    
    return winner;
  }

//   ---------- Test Case 1 ----------
console.log(tournamentWinner(
  [ [ 'HTML', 'C#' ], [ 'C#', 'Python' ], [ 'Python', 'HTML' ] ],
  [0, 0, 1]
));// Python
// ---------- Test Case 2 ----------
console.log(tournamentWinner(
  [ [ 'HTML', 'Java' ], [ 'Java', 'Python' ], [ 'Python', 'HTML' ] ],
  [0, 1, 1]
));// Java
// ---------- Test Case 3 ----------
console.log(tournamentWinner(
  [
    [ 'HTML', 'Java' ],
    [ 'Java', 'Python' ],
    [ 'Python', 'HTML' ],
    [ 'C#', 'Python' ],
    [ 'Java', 'C#' ],
    [ 'C#', 'HTML' ]
  ],
  [ 0, 1, 1, 1, 0, 1 ]
));// C#
// ---------- Test Case 4 ----------
console.log(tournamentWinner(
  [
    [ 'HTML', 'Java' ],
    [ 'Java', 'Python' ],
    [ 'Python', 'HTML' ],
    [ 'C#', 'Python' ],
    [ 'Java', 'C#' ],
    [ 'C#', 'HTML' ],
    [ 'SQL', 'C#' ],
    [ 'HTML', 'SQL' ],
    [ 'SQL', 'Python' ],
    [ 'SQL', 'Java' ]
  ],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
));// C#
// ---------- Test Case 5 ----------
console.log(tournamentWinner(
  [ [ 'Bulls', 'Eagles' ] ],
  [1]
));// Bulls
// ---------- Test Case 6 ----------
console.log(tournamentWinner(
  [ [ 'Bulls', 'Eagles' ], [ 'Bulls', 'Bears' ], [ 'Bears', 'Eagles' ] ],
  [ 0, 0, 0 ]
));// Eagles
// ---------- Test Case 7 ----------
console.log(tournamentWinner(
  [
    [ 'Bulls', 'Eagles' ],
    [ 'Bulls', 'Bears' ],
    [ 'Bulls', 'Monkeys' ],
    [ 'Eagles', 'Bears' ],
    [ 'Eagles', 'Monkeys' ],
    [ 'Bears', 'Monkeys' ]
  ],
  [ 1, 1, 1, 1, 1, 1 ]
));// Bulls
// ---------- Test Case 8 ----------
console.log(tournamentWinner(
  [
    [ 'AlgoMasters', 'FrontPage Freebirds' ],
    [ 'Runtime Terror', 'Static Startup' ],
    [ 'WeC#', 'Hypertext Assassins' ],
    [ 'AlgoMasters', 'WeC#' ],
    [ 'Static Startup', 'Hypertext Assassins' ],
    [ 'Runtime Terror', 'FrontPage Freebirds' ],
    [ 'AlgoMasters', 'Runtime Terror' ],
    [ 'Hypertext Assassins', 'FrontPage Freebirds' ],
    [ 'Static Startup', 'WeC#' ],
    [ 'AlgoMasters', 'Static Startup' ],
    [ 'FrontPage Freebirds', 'WeC#' ],
    [ 'Hypertext Assassins', 'Runtime Terror' ],
    [ 'AlgoMasters', 'Hypertext Assassins' ],
    [ 'WeC#', 'Runtime Terror' ],
    [ 'FrontPage Freebirds', 'Static Startup' ]
  ],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
));// AlgoMasters
// ---------- Test Case 9 ----------
console.log(tournamentWinner(
    
  [
    [ 'HTML', 'Java' ],
    [ 'Java', 'Python' ],
    [ 'Python', 'HTML' ],
    [ 'C#', 'Python' ],
    [ 'Java', 'C#' ],
    [ 'C#', 'HTML' ],
    [ 'SQL', 'C#' ],
    [ 'HTML', 'SQL' ],
    [ 'SQL', 'Python' ],
    [ 'SQL', 'Java' ]
  ],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
));// SQL
// ---------- Test Case 10 ----------
console.log(tournamentWinner(
  [ [ 'A', 'B' ] ]
  [ 0 ]
));// B