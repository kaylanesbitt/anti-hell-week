/**
 * 
 * @param {*} cid course id for which you want to get all the common courses & counts of students in those courses
 * @param {*} db database to run the sql query 
 * @param {*} callback returns a list of all tuples in form {cid: cid, count: num_students enrolled in cid}. ordered by greatest num students.
 */
function get_common_courses(cid, db, callback) {
    sql = 'with pids as (select e.pid as pid from enrolled e where e.cid = ' + cid
        + ') select e.cid, count(e.pid) as count, c.department, c.number, c.name, c.exam1, c.exam2, c.exam3 from enrolled e, courses c, pids where c.cid = e.cid and e.pid = pids.pid and e.cid != ' + cid
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

function get_all(db, callback) {
    sql = 'select e.cid, c.department, c.number, c.name, count(e.pid) as count, c.exam1, c.exam2, c.exam3 from enrolled e, courses c where e.cid = c.cid group by e.cid order by count desc'

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
const http = require('http');

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

app.get('/0', (req, res) => {
    get_common_courses(0, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/1', (req, res) => {
    get_common_courses(1, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/2', (req, res) => {
    get_common_courses(2, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/3', (req, res) => {
    get_common_courses(3, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/4', (req, res) => {
    get_common_courses(4, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/headmaster', (req, res) => {
    get_common_courses(5, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/incubator', (req, res) => {
    get_common_courses(6, db, function (callback) {
        res.json({ message: callback })
    })
});

app.get('/president', (req, res) => {
    get_all(db, function (callback) {
        res.json({ message: callback })
    })
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
