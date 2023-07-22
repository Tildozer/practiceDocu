function lengthOfLongestSubstring(s: string): number {
    let longestUniqueCharacters = 0;
    for(let i = 0; i < s.length - longestUniqueCharacters; i++ ) {
      let uniqueCharacters: number = _getSubstringLength(s, i);
      if(uniqueCharacters > longestUniqueCharacters) {
          longestUniqueCharacters = uniqueCharacters
      }
    }
    return longestUniqueCharacters
};


function _getSubstringLength(s: string, idx: number): number {
    let i = idx;
    let uniqueCharacters = {};
    while(!uniqueCharacters[s[i]] && i < s.length) {
        uniqueCharacters[s[i]] = true;
        i++;
    }

    return i - idx;
}