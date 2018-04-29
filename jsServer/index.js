const express = require('express')
const app = express();
const path = require('path');
const ledService = require('./services/led.service');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/led/on', (req, res) => {
  ledService.turnOn();
  res.end('turn the light on');
});

app.get('/led/off', (req, res) => {
  ledService.turnOff();
  res.end('turn the light off');
});

app.listen(7000, (err) => {
  if (err) {
    return ;
  } 
  console.log('start listening on port 7000')
});
