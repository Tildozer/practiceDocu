// Your code here
let table = document.querySelector(".map");
let button = document.querySelector("button");
let select = document.querySelector("select");
let fill = document.querySelector(".fill");
let fillNon = document.querySelector(".fillNon");
let clear = document.querySelector(".clear");
let input = document.querySelector("form");

console.log(input);

//adds a new row when button 'add a row' is clicked
input.addEventListener("submit", (ev) => {
  ev.preventDefault();
  inNum = ~~numOfRows.value;
  if (inNum === 0) {
    inNum = 1;
  }
  for (let i = 0; i < inNum; i++) {
    let newTr = document.createElement("tr");
    table.appendChild(newTr);
    for (let i = 0; i < 20; i++) {
      let newTd = document.createElement("td");
      newTr.appendChild(newTd);
      newTd.classList.toggle("pixel");
    }
  }
});

// fills the page with selected color
fill.addEventListener("click", (ev) => {
  ev.preventDefault();
  let td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    let currentPixel = td[i];
    currentPixel.className = select.value;
  }
});
// clear all blocks
clear.addEventListener("click", (ev) => {
  ev.preventDefault();
  let td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    let currentPixel = td[i];
    currentPixel.className = "pixel";
  }
});
// fill in blank squares only
fillNon.addEventListener("click", (ev) => {
  ev.preventDefault();
  let td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    let currentPixel = td[i];
    if (currentPixel.className === "pixel") {
      currentPixel.className = select.value;
    }
  }
});

// this and the function below it are used to select what color is being used.
select.addEventListener("change", () => {});

changeColor = (event) => {
  const target = event.target;
  if (target.className === "map") {
    // prevents that selector from choosing the whole table
  } else if (target.className !== select.value) {
    target.className = select.value;
  } else {
    target.className = "pixel";
  }
};

// just mouse interactions with main spot
table.addEventListener("mouseup", () => {
  table.removeEventListener("mouseover", changeColor);
});

table.addEventListener("mousedown", changeColor);
table.addEventListener("mousedown", () => {
  table.addEventListener("mouseover", changeColor);
});
