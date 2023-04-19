const axios = require('axios')

const getCourses = () => {
    const url = 'http://localhost:8000/0'
    axios.get(url)
        .then(response => {
            //displayOutput(response)
            response.data.message.forEach(element => {
                console.log(element)
            });
            return response
        }).catch(err => console.log(err))
}


const displayOutput = (responseDisplay) => {
    document.getElementById('responseDisplay').innerHTML = `
<div>
<h5>Status: ${responseDisplay.status}</h5>
</div>
`
}

getCourses(0)