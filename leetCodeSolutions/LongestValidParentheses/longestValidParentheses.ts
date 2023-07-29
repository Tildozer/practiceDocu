function longestValidParentheses(s: string): number {
  
    for(let i = 0; i < s.length; i++) {
      const subStringLength: number = checkForLongestValidParentheses(s.slice(i));
      console.log(subStringLength)
    }

    return 0;  
};

function checkForLongestValidParentheses(s: string): number {
    let parenthesesStarts: string[] = [];
    for (let i = 0; i < s.length; i++) {
      if(s[i] === "(") {
        if(parenthesesStarts.length > s.length - i) {
            return i;
        }
        parenthesesStarts.push("(");
      } else {
        if(!parenthesesStarts.length){
            return i;
        }
        
        parenthesesStarts.pop();
      }
    }

    return s.length;
}