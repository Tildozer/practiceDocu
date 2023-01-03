console.log('starting up');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('/ route matched');
    res.send('<h1>Home</h1><h2>hello world!</h2>');
})

app.get('/users', (req, res) => {
    res.send([
      {
        name: 'robert',
      },
      {
        name: 'Joe', 
      },
      {
        name: 'Greg', 
      }
    ])
})

app.listen(3000, () => {
    console.log('server is up.');
})