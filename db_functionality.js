const { unstable_createChainedFunction } = require('@mui/utils');
const { get } = require('express/lib/response');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
})

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
        rows.forEach((row) =>
            results.push(row)
        )
        callback(results)
    }
    ).close((error) => {
        if (error) {
            return console.log("Error closing database connection.")
        }
        console.log("Database connection successfully closed.")
    }

    )

}

//test get_common_courses on cid = 0
get_common_courses(0, db, function (callback) {
    console.log(callback)
})




/* CODE ARCHIVE:
function get_num_students(cid) {
    //open database connection, throw error if doesn't work. 
    let db = new sqlite3.Database('data.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = 'select E.cid, count(E.pid) from enrolled E where E.cid != ' + cid + ' group by E.cid'

    tuples = []
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log('Error occurred.');
        }
        rows.forEach((row) => {
            let map = { cid: row.cid, count: row['count(E.pid)'] }
            tuples.push(map)
        });
        console.log(tuples);
        db.close();
        console.log('Database connection closed.')
    })
}

function get_common_courses_count(cid, pids, db, callback) {
    count = 0
    pids.forEach((pid) => {
        let sql = 'select E.cid from enrolled E where E.pid = ' + pid + ' and E.cid != ' + cid
        db.all(sql, (error, rows) => {
            if (error) {
                return console.log('Error retrieving cids')
            }
            rows.forEach((row) => {
                count += row['count(E.cid)']
            })
            callback(count)
        })
    }
    )
}
function get_students(cid, db, pids) {
    let sql = 'select E.pid from enrolled E where E.cid = ' + cid
    db.all(sql, (error, rows) => {
        t = []
        rows.forEach((row) =>
            t.push(row.pid)
        )
        pids(t) //pushes up to return from get_students call. 
    })

}
*/