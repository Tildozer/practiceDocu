const express = require("express");
const app = express()
const pg = require("pg")
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_auth_db');
jwt = require("jsonwebtoken")
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    try {
      await client.connect();
      const SQL = `
        DROP TABLE IF EXIST users;
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) UNIQUE NOT NULL
        );
        INSER INTO users(name) VALUES('moe')
        INSER INTO users(name) VALUES('lucy')
        INSER INTO users(name) VALUES('larry')
        INSER INTO users(name) VALUES('ethyl')
      `
    } catch (error) {
        
    }
})