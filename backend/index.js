const express =require('express')

const app =express()

const port_number = 4000

app.use(express.json());

const prisonerRoute = require('./routes/prisonerRoute')
app.use('/prisoner', prisonerRoute)

// app.get('/', function (req, res) {
//     res.send('Hello Prisoners')
//   })

app.listen(port_number, () => {
    console.log(`server is running on http://localhost:${port_number}`)

})

// to run the backend server use `node index.js`