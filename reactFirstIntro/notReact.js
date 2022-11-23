let ul = document.querySelector('ul');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

console.log(button)

let numbers = [];

button.addEventListener('click', () => {
    let rnd = Math.ceil(Math.random() * 10);
    numbers.push(rnd);
    render();
});

const render = () => {
    let sum = numbers.reduce((acc, num) => {
        return acc + num
    }, 0)
    let html = numbers.map(num => {
        return `<li>${num}`;
    }).join('');
    ul.innerHTML = html;

    h1.innerText = `The sum is ${sum}`;
}

render();