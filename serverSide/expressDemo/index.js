import Puppies from "./components/Puppies";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Puppies and Kittens Site</title>
      </head>
      <body>
        <h1>Puppies and kittens galore<h1>
      </body>
    <html>
  `);
});

app.get("/puppies", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Puppies</title>
      </head>
      <body>
        <h1> Puppies!!!</h1>

      </body>
    </html>
  `);
});

app.get("/kittens", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Kittens</title>
      </head>
      <body>
        <h1> Kittens!!!</h1>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
