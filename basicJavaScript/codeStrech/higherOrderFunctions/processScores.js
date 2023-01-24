/**
 * processScores

    processScores takes string, with line breaks
    each row represents a student
    each row is delimited by commas
    the first value in the row is the name
    the rest of the values are scores
    processScores returns an object, where keys are names and values are score averages
    finish writing processScores

 */

const str = `
    moe,100,80,90
    lucy,100,99,98
    curly,80,81,82
    `;

const processScores = (data) => {
  const result = {};
  data
    .trim()
    .split("\n")
    .forEach((row) => {
      const parts = row.split(",");
      const name = parts[0];
      const scores = parts.slice(1);
      let sum = 0;
      scores.forEach((score) => {
        sum += +score;
      });
      const average = sum / scores.length;
      result[name] = average;
    });
  return result;
};

console.log(processScores(str)); //{moe: 90, lucy: 99, curly: 81}
