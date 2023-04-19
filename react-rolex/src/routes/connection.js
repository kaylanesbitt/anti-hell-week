const axios = require('axios')

const getCourses = () => {
    const url = 'http://localhost:8000/0'
    axios.get(url)
        .then(response => {
            console.log(response.data.message)
            return response
        }).catch(err => console.log(err))
}

const display = (response) => {
    return (`
    <div>
    <h1>Status: ${response.status} </h1>
    </div>
    `
    )
}

getCourses(0)