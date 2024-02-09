function longestPalindrome(s: string): string {
  if (s.length === 0) return s;

  let longest = [0, 1];

  for (let i = 0; i < s.length; i++) {
    const odd: number[] = findPalindromeLength(s, i - 1, i + 1);
    const even: number[] = findPalindromeLength(s, i - 1, i);
    const oddAmount: number = odd[1] - odd[0];
    const evenAmount: number = even[1] - even[0];
    const currAmount: number = longest[1] - longest[0];
    if (currAmount < oddAmount || currAmount < evenAmount) {
      if (evenAmount < oddAmount) {
        longest = odd;
      } else {
        longest = even;
      }
    }
  }

  return s.slice(longest[0], longest[1]);
}

function findPalindromeLength(
  s: string,
  left: number,
  right: number,
): number[] {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }
    left--;
    right++;
  }
  return [left + 1, right];
}
