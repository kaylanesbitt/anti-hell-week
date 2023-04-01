const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const { parse } = require("csv-parse");


//create new connection to database
  let db = new sqlite3.Database('data.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

   db.all('select * from students_test', function(err, rows) {
    rows.forEach(function(row) { 
        console.log(row)
    })
   });

  
  
  

  //create read stream for students CSV file 

  fs.createReadStream("./csv_data/students.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
         // for each row in csv file, make an insert statement.
        let values = row.map((value) => '?').join(',');
        let sql = 'INSERT INTO students_test(pid, fname, lname) VALUES(' + values + ');';
        console.log(sql)

        // insert into table using db connection
        /db.run(sql, row, function(err) {
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


db.close();