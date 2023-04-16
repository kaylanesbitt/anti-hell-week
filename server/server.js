/**
 * 
 * @param {*} cid course id for which you want to get all the common courses & counts of students in those courses
 * @param {*} db database to run the sql query 
 * @param {*} callback returns a list of all tuples in form {cid: cid, count: num_students enrolled in cid}. ordered by greatest num students.
 */
function get_common_courses(cid, db, callback) {
    sql = 'with zero_pids as (select e.pid as pid from enrolled e where e.cid = ' + cid
        + ') select e.cid, count(e.pid) as count, c.exam1, c.exam2, c.exam3 from enrolled e, courses c where c.cid = e.cid and e.pid = pid and e.cid != ' + cid
        + ' group by e.cid order by count(e.pid) desc'
    results = []
    db.all(sql, (error, rows) => {
        rows.forEach((row) => {
            results.push(row)
        }
        )
        callback(results)
    }
    )
}

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
})

const app = express();
app.use(cors());
app.use(express.json());

app.get('/message/', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/' + 0, (req, res) => {
    get_common_courses(cid, db, function (callback) {
        res.json({ message: callback })
    })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});