"use strict";
// Alert on top of screen
 //alert(`I'm a javaScript!`);

//  if you state a prompt before an alert you can use the input from a user to customize alerts.
//  let test = prompt(`what is your name?`, '');
//  alert(`Your name is ${test}, nice to meet you! `)

//let results = (a + b < 4) ? 'below' : 'Over';
/* Avoid except in simple locations
let message = (login === 'Employee') ? 'hello' :
(login === 'Director') ?  'greetings' :
(login === '') ? 'no login' :
'';
*/

/*const ageCheck = (age) => {
    if(age > 13 && age < 91){
        return age
    }

}
*/

/*
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {
    
    let pass = prompt('Password?', '');
    
    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
    
} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}
*/

/**
 
 for(let i = 0; i < 10; i++){
     if(i % 2 === 0){
         alert(i)
        }
    }
    
    */

/*
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}
*/

/*
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
*/


/*
nextPrime:
for(let i = 2; i < num; i++){
    for(let j = 2; j < i; j++){
        if(i % j === 0)
        continue nextPrime;
    }
}
*/

/*
let arg = prompt('Enter a value?');

if (arg === '0' || arg === '1'){
    alert(`One or zero`);
} else if (arg === 2){
    alert(`two`);
} else if (arg === 3){
    alert(`never executes!`);
} else {
    alert(`unkown value`);
}

*/

/*
let a = +prompt('a?', '')

switch(a) {
    case 0:
        alert(0);
        break;
    case 1: 
        alert(1);
        break;
    case 2: 
    case 3:
        alert('2, 3'); 
        break;
}
 */

/*
const checkAge = (age) => {
    return (age > 18) ? true : confrirm(`Did your parents allow you?`);
}

const min = (a, b) => {
    return Math.min(a, b);
}


const pow = (a, b) => {
    return a ** b;
}
console.log(pow(1, 100))
console.log(pow(3, 3))
console.log(pow(3, 2))

*/