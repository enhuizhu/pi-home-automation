"use strict";
const amqp = require('amqplib/callback_api');
let channel = null;
const QUEUE = 'led';

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    channel = ch;
    channel.assertQueue(QUEUE, {durable: false});
    console.log('reday for sending message');	  
  });
})


class LedService {
  static turnOn() {
    channel.sendToQueue(QUEUE, new Buffer("1"));
  }
  
  static turnOff() {
    channel.sendToQueue(QUEUE, new Buffer("0")); 
  }
}

module.exports = LedService; 
