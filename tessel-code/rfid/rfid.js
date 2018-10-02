// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic RFID example listens for an RFID
device to come within range of the module,
then logs its UID to the console.
*********************************************/

var tessel = require('tessel');
var rfidlib = require('rfid-pn532');

var http = require('http');

var rfid = rfidlib.use(tessel.port['A']);

rfid.on('ready', function (version) {
  console.log('Ready to read RFID card');

  rfid.on('data', function(card) {
    console.log('UID:', card.uid.toString('hex'));
    //let data = card.uid.toString('hex')
    http.request(options).end("I'm sending this to the server! from the NODE");
  });
});

rfid.on('error', function (err) {
  console.error(err);
});

var http = require('http');
var options = {
    host: '172.17.22.67',
    port: 8080,
    path: '/',
    method: 'POST',
};

console.log("Start");
http.request(options).end("I'm sending this to the server! from the NODE");
