'use strict';
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use('/cat', catRoute);
app.use('/user', userRoute);
/*app.get('/cat', (req, res) => {
    res.send('From this endpoint you can get cats.')
  });
  
  app.post('/cat', (req, res) => {
    res.send('From this endpoint you can add cats.')
  });
  
  app.put('/cat', (req, res) => {
    res.send('From this endpoint you can edit cats.')
  });
  
  app.delete('/cat', (req, res) => {
    res.send('From this endpoint you can delete cats.')
  });
  
  app.get(`/cat/:id`, (req,res) => {
    res.send(`You requested a cat whose id is ${req.params.id}`)
  })*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
