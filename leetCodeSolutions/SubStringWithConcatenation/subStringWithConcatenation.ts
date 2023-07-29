function findSubstring(s: string, words: string[]): number[] {
    const substringPoints: number[] = [];
    let wordsLength: number = 0;
    for(let i = 0; i < words.length; i++) {
      wordsLength += words[i].length;
    }
    for(let i = 0; i < s.length - wordsLength + 1; i++) {
      const newWords = words.slice();
      const currentWord = s.slice(i, i + wordsLength);
      if(checkString(currentWord, newWords)) {
        substringPoints.push(i);
      }
    }
    return substringPoints;
};

function checkString(s: string, words: string[]): boolean {
  if(words.length === 0) {
    return true;
  }
  for(let i = 0; i < words.length; i++) {
    const word = words[i]
    if(s.startsWith(word)) {
      words.splice(i, 1);     
      return checkString(s.slice(word.length), words);
    }
  }


  return false;
}