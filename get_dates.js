const sqlite3 = require('sqlite3').verbose();

/**
 *
 * @param cid course id for which you want to get all the common courses & counts of students in those courses
 * @param pids returns a list of all tuples in form {cid: cid, dates: exam dats for each cid}. ordered by date
 */
function getDates(cid, pids) {
    let result = [];
    let db = new sqlite3.Database('data.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });
    const query = 'SELECT exam1, exam2, exam3 FROM courses c WHERE c.cid = ' + cid;
    db.all(query, [], (err, rows) => {
        if (err)
            throw err;
        rows.forEach((row) => {
            let map = {exam1: row.exam1, exam2: row.exam2, exam3: row.exam3};
            result.push(map);
            pids(result);
        });


    });


}
    getDates(0, function(pids) {
    console.log(pids)
})




