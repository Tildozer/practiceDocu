const client = require('./client');

async function dropTables(){
  try{
    console.log('dropping tables')
    await client.query(``)
  } catch (err) {
    throw err;
  }

}
async function createTables() {
  try{
    console.log('dropping tables')
    await client.query(``)
    } catch (err) {
    throw err;
    }   
}