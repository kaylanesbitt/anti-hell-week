const sqlite3 = require('sqlite3').verbose();
const { parse } = require("csv-parse");


//create new connection to database
let db = new sqlite3.Database('data.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });


  //create read stream for each CSV and load into tables


  //close connection to database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
