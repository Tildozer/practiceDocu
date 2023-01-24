/*
    catMarkup
catMarkup
takes an array of cat names
returns an array of the cat names in upper case
  */

//TODO

const catMarkup = (cats) => cats.map((catName) => catName.toUpperCase());

console.log(catMarkup(["fluffy", "meeka"])); //['FLUFFY', 'MEEKA']
console.log(catMarkup(["fluffy", "meeka", "itchy"])); //['FLUFFY', 'MEEKA', 'ITCHY']
