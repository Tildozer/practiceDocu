/*
    filterFunctionsAndCallThem - use filter and map
write the function filterFunctionsAndCallThem
it takes an array
the array should be filtered for functions
those functions should be called and the results returned in an array
try and use filter followed by map
    */
// solution was left there on this one lol

const filterFunctionsAndCallThem = (arr) =>
  arr.filter((x) => typeof x === "function").map((x) => x());
const x = () => "foo";
const y = () => "bar";

const results = filterFunctionsAndCallThem([x, y, 42, true]); //['foo', 'bar']
console.log(results);
