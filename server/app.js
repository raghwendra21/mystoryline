'use strict';

// Set default node environment to development
const PORT = process.env.VENDOR_NODE_ENV || 8080;
const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./route');

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27018/mystoryline');

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api', apiRoutes)

const server = require('http').createServer(app);
require('./config/express')(app);


// Start server
server.listen(PORT, function() {
    console.log('Express server listening on %d, in %s mode', 8080, app.get('env'));
});

// Expose app
exports = module.exports = app;