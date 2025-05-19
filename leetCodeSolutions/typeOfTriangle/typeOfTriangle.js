var triangleType = function (nums) {
  const first = nums[0];
  const second = nums[1];
  const third = nums[2];

  if (
    first + second <= third ||
    first + third <= second ||
    second + third <= first
  )
    return "none";

  if (first === second && first === third) return "equilateral";

  if (first === second || first === third || second === third)
    return "isosceles";

  return "scalene";
};
