/*
A company has hired N interns to each join one of N different teams. 
Each intern has ranked their preferences for which teams they wish to join, and each team has ranked their preferences for which interns they prefer.
Given these preferences, assign 1 intern to each team. 
These assignments should be "stable," meaning that there is no unmatched pair of an intern and a team such that both that intern and that team would prefer they be matched with each other.
In the case there are multiple valid stable matchings, the solution that is most optimal for the interns should be chosen (i.e. every intern should be matched with the best team possible for them).
Your function should take in 2 2-dimensional lists, one for interns and one for teams. 
Each inner list represents a single intern or team's preferences, ranked from most preferable to least preferable.
These lists will always be of length N, with integers as elements. Each of these integers corresponds to the index of the team/intern being ranked. 
Your function should return a 2-dimensional list of matchings in no particular order. Each matching should be in the format [internIndex, teamIndex].
*/

function stableInternships(interns, teams) {
  // Write your code here.
  let chosenInterns = {};
  let freeInterns = new Array(interns.length).fill(null);
  freeInterns = freeInterns.map((intern, idx) => (intern = idx));
  let currentInternChoices = new Array(interns.length).fill(0);
  let teamMaps = [];
  for (let team of teams) {
    let rank = {};
    for (let i in team) {
      rank[team[i]] = i;
    }
    teamMaps.push(rank);
  }

  while (freeInterns.length) {
    let internNum = freeInterns.pop();

    let intern = interns[internNum];
    let teamPrefrences = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum] += 1;

    if (!(teamPrefrences in chosenInterns)) {
      chosenInterns[teamPrefrences] = internNum;
      continue;
    }

    let previousIntern = chosenInterns[teamPrefrences];
    let previousInternRank = teamMaps[teamPrefrences][previousIntern];
    let currentInternRank = teamMaps[teamPrefrences][internNum];

    if (currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPrefrences] = internNum;
    } else {
      freeInterns.push(internNum);
    }
  }

  const matches = [];
  for (let teamNum in chosenInterns) {
    matches.push([chosenInterns[teamNum], +teamNum]);
  }
  return matches;
}

// ---------- Test Case 1 ----------
console.log(stableInternships([], [])); // []
// ---------- Test Case 2 ----------
console.log(stableInternships([[0]], [[0]])); // [ [ 0, 0 ] ]
// ---------- Test Case 3 ----------
console.log(
  stableInternships(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [1, 0],
    ]
  )
); // [ [ 0, 0 ], [ 1, 1 ] ]
// ---------- Test Case 4 ----------
console.log(
  stableInternships(
    [
      [0, 1],
      [0, 1],
    ],
    [
      [0, 1],
      [0, 1],
    ]
  )
); // [ [ 0, 0 ], [ 1, 1 ] ]
// ---------- Test Case 5 ----------
console.log(
  stableInternships(
    [
      [0, 1],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 0],
    ]
  )
); // [ [ 0, 0 ], [ 1, 1 ] ]
// ---------- Test Case 6 ----------
console.log(
  stableInternships(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [0, 1],
    ]
  )
); // [ [ 0, 0 ], [ 1, 1 ] ]
// ---------- Test Case 7 ----------
console.log(
  stableInternships(
    [
      [1, 0],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 0],
    ]
  )
); // [ [ 1, 0 ], [ 0, 1 ] ]
// ---------- Test Case 8 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2],
      [2, 1, 0],
      [1, 2, 0],
    ],
    [
      [2, 1, 0],
      [0, 1, 2],
      [0, 2, 1],
    ]
  )
); // [ [ 0, 0 ], [ 2, 1 ], [ 1, 2 ] ]
// ---------- Test Case 9 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2],
      [0, 2, 1],
      [1, 2, 0],
    ],
    [
      [2, 1, 0],
      [0, 1, 2],
      [0, 2, 1],
    ]
  )
); // [ [ 1, 0 ], [ 0, 1 ], [ 2, 2 ] ]
// ---------- Test Case 10 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2],
      [0, 1, 2],
      [0, 1, 2],
    ],
    [
      [2, 1, 0],
      [2, 1, 0],
      [2, 1, 0],
    ]
  )
); // [ [ 2, 0 ], [ 1, 1 ], [ 0, 2 ] ]
// ---------- Test Case 11 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2, 3],
      [2, 1, 3, 0],
      [0, 2, 3, 1],
      [3, 1, 0, 2],
    ],
    [
      [1, 3, 2, 0],
      [0, 1, 2, 3],
      [1, 2, 3, 0],
      [3, 0, 2, 1],
    ]
  )
); // [ [ 2, 0 ], [ 0, 1 ], [ 1, 2 ], [ 3, 3 ] ]
// ---------- Test Case 12 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2, 3],
      [0, 1, 3, 2],
      [0, 2, 3, 1],
      [0, 2, 3, 1],
    ],
    [
      [1, 3, 2, 0],
      [0, 1, 2, 3],
      [1, 2, 3, 0],
      [3, 0, 2, 1],
    ]
  )
); // [ [ 1, 0 ], [ 0, 1 ], [ 2, 2 ], [ 3, 3 ] ]
// ---------- Test Case 13 ----------
console.log(
  stableInternships(
    [
      [0, 1, 2, 3],
      [0, 1, 3, 2],
      [0, 2, 3, 1],
      [0, 2, 3, 1],
    ],
    [
      [1, 3, 2, 0],
      [0, 1, 2, 3],
      [1, 3, 2, 0],
      [3, 0, 2, 1],
    ]
  )
); // [ [ 1, 0 ], [ 0, 1 ], [ 3, 2 ], [ 2, 3 ] ]
