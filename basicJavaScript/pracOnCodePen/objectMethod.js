// ticTacToe
/*
Tic Tac Toe
Define an object ticTacToe.

Follow the test specs to create a board property, move method, and a clear method.

The board property is a grid of arrays that represents the board, where each cell is initially null.

The move method is a method that, given a character, a row number, and a column number, adds the character to the correct cell in the board.

The clear method should reset the board to all nulls.
*/

let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (char, row, column) {
    if (this.board[row][column] === null) {
      this.board[row][column] = char;
      // console.log(this.board[row][column] = char)
    }
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};

/*
Call Them All
Define a function, callThemAll, that accepts an object, object, and a value, value.

callThemAll should call every method in the object, passing in the value as the argument with each call.

callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.
*/

const callThemAll = (obj, num) => {
  let results = [];
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      // console.log(key)
      results.push(obj[key](num));
    }
    // console.log(results)
  }
  return results;
};

/*sayYourName
Say Your Name
Create a new object, me2. Like the previous problem Say My Name, this object should contain a name property and a method, getGreeting. However, this time getGreeting should accept an object that contains a name property as an argument.The returned greeting should now greet the other object by name.

console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
*/

// YOUR CODE BELOW
let me2 = {
  name: "Kat",
  getGreeting: function (nam) {
    return `Hi ${nam.name}, my name is ${me2.name}.`;
  },
};

/*
    Say My Name
Define an object, me, that has a name property and a getGreeting method. getGreeting should return a greeting.

console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'
   */

const me = {
  name: "Kat",
  getGreeting: function () {
    return `Hi, my name is ${me.name}.`;
  },
};

/* tacoCatInc;
Taco Cat Inc.
You run an insanely profitable business making gourmet tacos for cats. Given an object that represents the inventory of your company, tacoCatInc, add a method currentInventory to your object that returns the current value of your company's inventory.

Then, add a sale method that takes an order object, returns the price of the order, updates the inventory of the purchased items, and adds the price of the order to the company's cash property.

Heads up: This problem is a bit more involved than anything you'd see on an admissions assessment or interview. Besides being a fun challenge, it's intended to show how you can use objects and their methods to store and change state.


*/

let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  let sum = 0;

  for (let key in this) {
    if (key === "cash") {
      continue;
    }
    let item = this[key];

    for (let key2 in item) {
      let itemObj = item[key2];

      let product = itemObj.cost * itemObj.quantity;

      sum += product;
    }
  }
  return sum;
};
tacoCatInc.sale = function (order) {
  let finalPrice = 0;

  // loop through all of the categories in the order
  for (let category in order) {
    console.log(category);
    // the choices are the keys in the order object
    let choice = order[category];

    // add the cost of the choice to the final price
    finalPrice += this[category][choice].cost;

    // also add the cost of the choice to the cash property
    this.cash += this[category][choice].cost;

    // also subtract one from the quantity of the chosen item
    this[category][choice].quantity--;
  }

  return finalPrice;
};

/*
  tacoCatInc.currentInventory = function() {
  let total = 0;

  // loop through every key in tacoCatInc
  for (let category in this) {

    // don't include cash in the inventory calculation
    if (category === 'cash') {
      continue;
    }

    // the value in each category is another object of items
    let items = this[category];

    // loop through each itemName in the category
    for (let itemName in items) {
      let itemObj = items[itemName];

      // add the product of each item's cost and quantity to the total
      total += itemObj.cost * itemObj.quantity;
    }

  }

  return total;
};

tacoCatInc.sale = function(order) {
  let finalPrice = 0;

  // loop through all of the categories in the order
  for (let category in order) {

    // the choices are the keys in the order object
    let choice = order[category];

    // add the cost of the choice to the final price
    finalPrice += this[category][choice].cost;

    // also add the cost of the choice to the cash property
    this.cash += this[category][choice].cost;

    // also subtract one from the quantity of the chosen item
    this[category][choice].quantity--;
  }

  return finalPrice;
}
  */
