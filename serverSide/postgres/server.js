const express = require("express");
const app = express();
const pg = require("pg");
const client = new pg.Client("postgres://localhost/acme-things-db");

const setup = async () => {
  try {
    await client.connect();
    console.log("connected");
    const sql = `CREATE TABLE things(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO things(name) VALUES('foo');
INSERT INTO things(name) VALUES('bar');
INSERT INTO things(name) VALUES('bazz');
INSERT INTO things(name) VALUES('quq');

SELECT id, name
FROM things;
`;
    await client.query(sql);
  } catch (err) {
    console.error(err);
  }
};

setup();
