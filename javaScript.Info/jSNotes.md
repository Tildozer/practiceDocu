###### javaScript.info ######

To attach several scripts, use multiple tags:

<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
 
 alert tags,

 alert('I'm a javaScript!');


 If you’re curious to see a concrete example of such an error, check this code out:

alert("Hello");

[1, 2].forEach(alert);
No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of running the code: it shows Hello, then 1, then 2.

Now let’s remove the semicolon after the alert:

alert("Hello")

[1, 2].forEach(alert);

Here’s how the engine sees it:

alert("Hello")[1, 2].forEach(alert);
Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.

This can happen in other situations also.

 <!-- strictMode  -->

For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

“use strict”
The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

For example:

"use strict";

// this code works the modern way

 There’s no way to cancel use strict
There is no directive like "no use strict" that reverts the engine to old behavior.

Once we enter strict mode, there’s no going back.

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

Precedence	Name	Sign
…	…	…
14	unary plus	+
14	unary negation	-
13	exponentiation	**
12	multiplication	*
12	division	/
11	addition	+
11	subtraction	-
…	…	…
2	assignment	=
…	…	…
As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

## ternary operator

The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

For example:

let accessAllowed = (age > 18) ? true : false;
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

This example will do the same thing as the previous one:

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
But parentheses make the code more readable, so we recommend using them.

Please note:
In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same
let accessAllowed = age > 18;

Multiple ‘?’
A sequence of question mark operators ? can return a value that depends on more than one condition.

For instance:

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

The first question mark checks whether age < 3.
If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘":"’, checking age < 18.
If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100.
If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'.
Here’s how this looks using if..else:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}


Non-traditional use of ‘?’
Sometimes the question mark ? is used as a replacement for if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

It’s not recommended to use the question mark operator in this way.

Here is the same code using if for comparison:

let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

## Nullish Operator ??

Historically, the OR || operator was there first. It exists since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.
In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

For example, consider this: 
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
so the result of || is the second argument, 100.
The height ?? 100 checks height for being null/undefined, and it’s not,
so the result is height “as is”, that is 0.

### Loops
# do while loop
The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

For example:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

# break loops 
Breaking the loop
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

# continue iterations

Continue to the next iteration
The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

The loop below uses continue to output only odd values:

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.

The continue directive helps decrease nesting
A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.

But as a side effect, this created one more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

No break/continue to the right side of ‘?’
Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

For example, if we take this code:

if (i > 5) {
  alert(i);
} else {
  continue;
}
…and rewrite it using a question mark:

(i > 5) ? alert(i) : continue; // continue isn't allowed here
…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.

Labels for break/continue
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to alert('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }
The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

Labels do not allow to “jump” anywhere
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

break label; // jump to the label below (doesn't work)

label: for (...)
A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
  // ...
  break label; // works
  // ...
}
…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.

A continue is only possible from inside a loop.

Summary
We covered 3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
# switch 
The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).



## functions

Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given
Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


It is possible to use return without a value. That causes the function to exit immediately.

For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

One function – one action
A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

getAge – would be bad if it shows an alert with the age (should only get).
createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they’re not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.


## Naming a function
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
Examples of such names:

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

Ultrashort function names
Functions that are used very often sometimes have ultrashort names.

For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.

These are exceptions. Generally function names should be concise and descriptive.

## function expressions

Function is a value
Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code
Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

Surely, a function is a special value, in the sense that we can call it like sayHi().

But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


Callback functions
Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function ask(question, yes, no) with three parameters:

question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


actice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story.

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.

### primatives

A primitive

Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
One of the best things about objects is that we can store a function as one of its properties.

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!
So here we’ve made an object john with the method sayHi.

Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.

But, these features come with a cost!

Objects are “heavier” than primitives. They require additional resources to support the internal machinery.
### Numbers


# hexidecimal

Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.

For instance:

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides
There are only 3 numeral systems with such support. For other numeral systems, we should use the function parseInt (which we will see later in this chapter).

toString(base)
The method num.toString(base) returns a string representation of num in the numeral system with the given base.

For example:

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
The base can vary from 2 to 36. By default it’s 10.

Common use cases for this are:

base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:

alert( 123456..toString(36) ); // 2n9c
Two dots to call a method
Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

Also could write (123456).toString(36).

# rounding

Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
Here’s the table to summarize the differences between them:

    Math.floor	Math.ceil	Math.round	Math.trunc
3.1;    3	        4	        3	        3
3.6;    3	        4	        4	        3
-1.1;   -2	        -1	        -1      	-1
-1.6;   -2	        -1	        -2	        -1

Multiply-and-divide.

For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.

let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
This rounds up or down to the nearest value, similar to Math.round:

let num = 12.36;
alert( num.toFixed(1) ); // "12.4"
Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).

Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.

If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:

alert( 1e500 ); // Infinity

What may be a little less obvious, but happens quite often, is the loss of precision.

Consider this (falsy!) equality test:

alert( 0.1 + 0.2 == 0.3 ); // false
That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.

Strange! What is it then if not 0.3?

alert( 0.1 + 0.2 ); // 0.30000000000000004
Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order total will be $0.30000000000000004. That would surprise anyone.

But why does this happen?

A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

What is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

We can see this in action:

alert( 0.1.toFixed(20) ); // 0.10000000000000000555
And when we sum two numbers, their “precision losses” add up.

So, multiply/divide approach reduces the error, but doesn’t remove it totally.

Sometimes we could try to evade fractions at all. Like if we’re dealing with a shop, then we can store prices in cents instead of dollars. But what if we apply a discount of 30%? In practice, totally evading fractions is rarely possible. Just round them to cut “tails” when needed.

The funny thing
Try running this:

// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000
This suffers from the same issue: a loss of precision. There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. So the least significant digits disappear.

JavaScript doesn’t trigger an error in such events. It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.

Two zeroes
Another funny consequence of the internal representation of numbers is the existence of two zeroes: 0 and -0.

That’s because a sign is represented by a single bit, so it can be set or not set for any number including a zero.

In most cases the distinction is unnoticeable, because operators are suited to treat them as the same.

### NaN and Finite

Tests: isFinite and isNaN
Remember these two special numeric values?

Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
NaN represents an error.
They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

isNaN(value) converts its argument to a number and then tests it for being NaN:

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

alert( NaN === NaN ); // false
isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
Sometimes isFinite is used to validate whether a string value is a regular number:

### Strings

Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines
Looks natural, right? But single or double quotes do not work this way.

# special characters

There are other, less common special characters:

Character	Description
\n	New line
\r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
\', \", \`	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

# accessing characters.

To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );
As you can see, the .at(pos) method has a benefit of allowing negative position. If pos is negative, then it’s counted from the end of the string.

So .at(-1) means the last character, and .at(-2) is the one before it, etc.

The square brackets always return undefined for negative indexes, for instance:
let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l


We can also iterate over characters using for..of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

# changing casing
Methods toLowerCase() and toUpperCase() change the case:

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
Or, if we want a single character lowercased:

alert( 'Interface'[0].toLowerCase() ); // 'i'
Searching for a substring
There are multiple ways to look for a substring within a string.

