const { parse } = require('date-fns')

function getCourses(cid, tuples) {
    const axios = require('axios')
    const url = 'http://localhost:8000/' + cid
    axios.get(url)
        .then(response => {
            tuples(response.data.message)
        }).catch(err => console.log(err))
}

function convertDate(date) {
    if (date.length == 13) {
        year = parseInt(date[2] + date[3] + date[4] + date[5] + date[6])
        month = parseInt(date[7] + date[8])
        day = parseInt(date[10] + date[11])
        return [year, month, day]
    }
    else {
        return 0
    }
}

function classHeader(dept, num, name) {
    return `${dept} ${num}: ${name}`
}

function getDates() {
    getCourses(0, function (tuples) {
        dates_arr = []
        tuples.forEach((elt) => {
            console.log(classHeader(elt.department, elt.number, elt.name))
            if (convertDate(elt.exam1) != 0) {
                dates_arr.push(convertDate(elt.exam1))
            }
            if (convertDate(elt.exam2) != 0) {
                dates_arr.push(convertDate(elt.exam1))
            }
            if (convertDate(elt.exam3) != 0) {
                dates_arr.push(convertDate(elt.exam1))
            }
        })
        console.log(dates_arr) //use array here 
    })

}

getDates()

//parseInt(str)
