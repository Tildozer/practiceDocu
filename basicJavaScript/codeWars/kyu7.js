/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

const isSquare = (n) => {
  let sqrRoot = Math.sqrt(n);
  let string = sqrRoot.toString();
  if (n < 0) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    let searchNum = string[i];
    if (searchNum === ".") {
      return false;
    }
  }
  return true;
};

/* otherSolutoion
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
PLEASE DO THIS ONE lol
*/

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  // TODO
  let rowStart = n * n - (n - 1);
  let sum = rowStart;

  for (let i = 1; i < n; i++) {
    let add = rowStart + i * 2;
    sum += add;
  }
  return sum;
}

/*other solutions
  function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
  */

/*
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna) {
  //your code here
  let compDNA = "";
  for (let i = 0; i < dna.length; i++) {
    let strand = dna[i];
    let translate = { A: "T", T: "A", G: "C", C: "G" };
    compDNA += translate[strand];
  }
  return compDNA;
}

/* question solution?
  function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
  */

/*
DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

function openOrSenior(data) {
  // ...
  let qualified = [];
  for (let i = 0; i < data.length; i++) {
    let ageCheck = data[i][0];
    let handicap = data[i][1];
    if (ageCheck >= 55 && handicap >= 8) {
      qualified.push("Senior");
    } else {
      qualified.push("Open");
    }
  }
  return qualified;
}

/**otherSolution?
   function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
   */

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  // Go for it
  let word = "";
  let finalReverse = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter !== " ") {
      word += letter;
    } else {
      for (let i = word.length - 1; i >= 0; i--) {
        finalReverse += word[i];
      }
      finalReverse += " ";
      word = "";
    }
  }
  for (let i = word.length - 1; i >= 0; i--) {
    finalReverse += word[i];
  }
  return finalReverse;
}

/*notable solution
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

*/
