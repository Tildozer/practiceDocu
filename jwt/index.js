const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (res, req, next) => {
  res.sendFile(_dirname, '/public.index.html')
})

app.post('/register', async (req, res, next) => {
  console.log('')
})

app.listen(3000, async () => {
  console.log('severs is unning on port 3000');
  try{
    console.log('')
    await client.connect();
    
  } catch (error) {
    console.log('could not connect to db ;(')
  }
})