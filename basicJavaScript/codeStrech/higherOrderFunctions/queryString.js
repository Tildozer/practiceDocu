/*
queryString for setting values

    write queryString
    it takes an object
    it returns a formatted string which can be used in a SQL query string for setting values

*/

//TODO
const queryString = (obj) => {
  /* const arr = [];
  let idx = 1;
  for(let key in obj){
    
    arr.push(`"${key}"=$${idx}`);
    idx++
  }
  return arr/.join(',')*/

  return Object.keys(obj)
    .map((key, idx) => `"${key}"=$${idx + 1}`)
    .join(",");
};

console.log(queryString({ name: "moe", password: "123" })); //"name"=$1, "password"=$2
console.log(queryString({ name: "moe", password: "123", nickname: "mo" })); //"name"=$1,"password"=$2,"nickname"=$3
console.log(queryString({ foo: "bar", bazz: "quq", x: "y" })); //"foo"=$1,"bazz"=$2,"x"=$3
