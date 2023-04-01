const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const { parse } = require("csv-parse");


//create read stream for students CSV file 
function read_and_load(filename, db) {
  var table_name = ''
  if (filename.includes('students')) {
    table_name = 'students (pid, fname, lname)';
  }
  else if (filename.includes('courses')) {
    table_name = 'courses (cid, name, number, department, exam1, exam2, exam3)';
  }
  else {
    table_name = 'enrolled (pid, cid)';
  }

  fs.createReadStream("./csv_data/" + filename)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      // for each row in csv file, make an insert statement.
      let values = row.map((value) => '?').join(',');
      let sql = 'INSERT INTO ' + table_name + ' VALUES(' + values + ');';
      console.log(sql)

      // insert into table using db connection
      db.run(sql, row, function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Rows inserted ${this.lastID}`);
      });
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      console.log("Done");
    });
}

let db = new sqlite3.Database('data.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

function x() {
  read_and_load('students.csv', db);
  read_and_load('courses.csv', db);
  read_and_load('enrolled.csv', db);
}

x()

