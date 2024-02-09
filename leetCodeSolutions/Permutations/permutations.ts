function permute(nums: number[]): number[][] {
  let permutations: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    let copyArray: number[] = nums.slice();
    let currNum: number[] = copyArray.splice(i, 1);
    _makePermutations(currNum, copyArray, permutations);
  }

  return permutations;
}

function _makePermutations(
  permutation: number[],
  array: number[],
  permutations: number[][],
) {
  if (!array.length) {
    permutations.push(permutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray: number[] = array.slice(0, i).concat(array.slice(i + 1));
      let currNum = array[i];
      let newPermutation = permutation.slice();
      newPermutation.push(currNum);
      _makePermutations(newPermutation, newArray, permutations);
    }
  }
}
