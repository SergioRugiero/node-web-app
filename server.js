'use strict';

const express = require('express');

var os = require("os");
var hostname = os.hostname();
var platform = os.platform();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello world\n');
  res.send(`${hostname}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);



