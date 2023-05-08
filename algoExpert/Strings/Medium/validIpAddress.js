/*
You're given a string of length 12 or smaller, containing only digits. 
Write a function that returns all the possible IP addresses that can be created by inserting threes in the string.
An IP address is a sequence of four positive integers that are separated by '.', where each individual integer is within the range 0 - 255 , inclusive.
An IP address isn't valid if any of the individual integers contains leading 0 s. 
For example, "192.168.0.1" is a valid IP address, but "192.168.00.1" and "192.168.0.01" aren't, because they contain "00" and 01, respectively. Another example of a valid IP address is "99.1.1.10";
 conversely, "991.1.1.0" isn't valid, because "991" is greater than 255.
Your function should return the IP addresses in string format and in no particular order. 
If no valid IP addresses can be created from the string, your function should return an empty list.
*/

function validIPAddresses(string) {
  // Write your code here.
  const validIps = [];
  for (let i = 1; i < Math.min(string.length, 4); i++) {
    const currentIpParts = ["", "", "", ""];
    currentIpParts[0] = string.slice(0, i);
    if (!_isValid(currentIpParts[0])) {
      continue;
    }
    for (let j = i + 1; j < i + Math.floor(string.length - i, 4); j++) {
      currentIpParts[1] = string.slice(i, j);
      if (!_isValid(currentIpParts[1])) {
        continue;
      }
      for (let k = j + 1; k < j + Math.floor(string.length - j, 4); k++) {
        currentIpParts[2] = string.slice(j, k);
        currentIpParts[3] = string.slice(k);
        if (_isValid(currentIpParts[2]) && _isValid(currentIpParts[3])) {
          validIps.push(
            `${currentIpParts[0]}.${currentIpParts[1]}.${currentIpParts[2]}.${currentIpParts[3]}`
          );
        }
      }
    }
  }
  return validIps;
}

// ---------- Test Case 1 ----------
console.log(validIPAddresses("1921680"));
// [
//   '1.9.216.80', '1.92.16.80',
//   '1.92.168.0', '19.2.16.80',
//   '19.2.168.0', '19.21.6.80',
//   '19.21.68.0', '19.216.8.0',
//   '192.1.6.80', '192.1.68.0',
//   '192.16.8.0'
// ]
// ---------- Test Case 2 ----------
console.log(validIPAddresses("3700100")); // [ '3.70.0.100', '37.0.0.100' ]
// ---------- Test Case 3 ----------
console.log(validIPAddresses("9743")); // [ '9.7.4.3' ]
// ---------- Test Case 4 ----------
console.log(validIPAddresses("97430")); // [ '9.7.4.30', '9.7.43.0', '9.74.3.0', '97.4.3.0' ]
// ---------- Test Case 5 ----------
console.log(validIPAddresses("997430"));
// [
//   '9.9.74.30',
//   '9.97.4.30',
//   '9.97.43.0',
//   '99.7.4.30',
//   '99.7.43.0',
//   '99.74.3.0'
// ]
// ---------- Test Case 6 ----------
console.log(validIPAddresses("255255255255")); // [ '255.255.255.255' ]
// ---------- Test Case 7 ----------
console.log(validIPAddresses("255255255256")); // []
// ---------- Test Case 8 ----------
console.log(validIPAddresses("99999999")); // [ '99.99.99.99' ]
// ---------- Test Case 9 ----------
console.log(validIPAddresses("33133313")); // [ '33.13.33.13', '33.133.3.13', '33.133.31.3' ]
// ---------- Test Case 10 ----------
console.log(validIPAddresses("00010")); // [ '0.0.0.10' ]
// ---------- Test Case 11 ----------
console.log(validIPAddresses("100100")); // [ '1.0.0.100', '10.0.10.0', '100.1.0.0' ]
// ---------- Test Case 12 ----------
console.log(validIPAddresses("1072310"));
// [
//   '10.7.23.10',
//   '10.7.231.0',
//   '10.72.3.10',
//   '10.72.31.0',
//   '107.2.3.10',
//   '107.2.31.0',
//   '107.23.1.0'
// ]
// ---------- Test Case 13 ----------
console.log(validIPAddresses("1")); // []
// ---------- Test Case 14 ----------
console.log(validIPAddresses("11")); // []
// ---------- Test Case 15 ----------
console.log(validIPAddresses("111")); // []
// ---------- Test Case 16 ----------
console.log(validIPAddresses("00001")); // []
