const express = require('express');
const app = express();
const Port = process.env.port || 3000;
const databaseConnection = require('./app/db');
const ourApp = require('./app');
// Database Connection
databaseConnection();

app.use(express.json());
app.use('/', ourApp.router);
app.listen(Port, () => {
  console.log(`Server up, running on Port: ${Port}...`);
});
