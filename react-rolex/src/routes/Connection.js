// const { parse } = require('date-fns')

// function headmasterCourses(tuples) {
//     const axios = require('axios')
//     const url = 'http://localhost:8000/headmaster'
//     axios.get(url)
//         .then(response => {
//             tuples(response.data.message)
//         }).catch(err => console.log('error occured'))
// }


// function incubatorCourses(tuples) {
//     const axios = require('axios')
//     const url = 'http://localhost:8000/incubator'
//     axios.get(url)
//         .then(response => {
//             tuples(response.data.message)
//         }).catch(err => console.log('error occured'))
// }


// function prezCourses(tuples) {
//     const axios = require('axios')
//     const url = 'http://localhost:8000/president'
//     axios.get(url)
//         .then(response => {
//             tuples(response.data.message)
//         }).catch(err => console.log('error occured'))
// }

// prezCourses(tuples => console.log(tuples))
// function convertDate(date) {
//     const months = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'
//     ]
//     if (date.length === 10) {
//         const year = parseInt(date[0] + date[1] + date[2] + date[2])
//         const month = parseInt(date[5] + date[6])
//         const day = parseInt(date[8] + date[9])
//         return `${months[month]} ${day}, ${year}`
//     }
//     else {
//         return 0
//     }
// }

// console.log(convertDate('2023-04-25'))

// function classHeader(dept, num, name) {
//     return `${dept} ${num}: ${name}`
// }

// function numStudents(num) {
//     return `Number of enrolled students: ${num}`
// }
/*

function getHeadmasterDates() {
    headmasterCourses(function (tuples) {
        dates_arr = []
        tuples.forEach((elt) => {
            console.log(classHeader(elt.department, elt.number, elt.name))
            console.log(numStudents(elt.count))
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


//parseInt(str)

export { headmasterCourses, incubatorCourses, prezCourses }
*/