console.log("starting up");
const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
  <h1>Home</h1>
  <h2>hello world!</h2>
  `);
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "robert",
    },
    {
      name: "Joe",
    },
    {
      name: "Greg",
    },
  ]);
});

app.listen(3000, () => {
  console.log("server is up.");
});

app.post("/users", (req, res) => {
  // do something with the body
  res.send({ message: "nothing here yet", youSentUs: req.body });
});
