const { 
  client, 
  getAllUsers,
  createUser 
} = require('./index');

async function dropTables() {
  try{
    console.log("Starting to drop tables...");

    await client.query(
        `DROP TABLE IF EXISTS users;
        `);
    
    console.log("finished dropping the tables!");
  } catch (err) {
    console.error('Error dropping the tables!');
    throw err;
  }
}

async function createTables() {
  try {
    console.log('starting to build tables...');

    await client.query(
        `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL
          );
        `);

    console.log("finished building tables!");
  } catch (err) {
    throw err;
  }
}

async function createInitialUsers() {
  try{
    console.log("starting to create users...");

    const albert = await createUser({username: 'albert', password: 'bertie99'});
    const sanda = await createUser({username: 'sandra', password: '2sandy4me'});
    const glamgal = await createUser({username: 'glamgal', password: 'soglam'});

    console.log([albert, sanda, glamgal]);

    console.log('Finished creating users!')
  } catch (err) {
    console.error('Error creating initial users!')
    throw err;
  }
}

async function rebuildDB(){
  try{
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
  } catch (err) {
    throw err;
  }
}

async function testDB() {
  try {
    console.log("Starting to test the databas...");

    const users = await getAllUsers();
    console.log('getAllUsers:', [users]);

    console.log("finished database tests!");
  } catch (err) {
    console.error("error testing database!");
    throw err;
  }
}


rebuildDB()
.then(testDB)
.catch(console.error)
.finally(_ => client.end());