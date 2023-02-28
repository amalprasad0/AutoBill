// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://adminUser:suVVOf6Vv6UNZqns@cluster0.6kubs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myProject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});