/*
Write a SuffixTrie class for a Suffix-Trie-like data structure. 
The class should have a root property set to be the root node of the trie and should support.
    • Creating the trie from a string; 
        this will be done by calling the populateSuffixTrieFrom method upon class instantiation, which should populate the root of the class.
    • Searching for strings in the trie.
Note that every string added to the trie should end with the special endSymbol character: "*"
*/

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      this.insertSubStringStartingAt(i, string);
    }
  }

  insertSubStringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!node[letter]) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node[this.endSymbol] = true;
    // console.log(this)
  }

  contains(string) {
    // Write your code here.
    let node = this.root;
    for (let letter of string) {
      if (!node[letter]) {
        return false;
      }
      node = node[letter];
    }
    return !!node[this.endSymbol];
  }
}
