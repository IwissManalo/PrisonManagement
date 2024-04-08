const express =require('express')

const app =express()

const port_number = 4000

app.use(express.json());

const prisonerRoute = require('./routes/prisonerRoute')
app.use('/p', prisonerRoute)

const guardRoute = require('./routes/guardRoute')
 app.use('/g', guardRoute)


app.listen(port_number, () => {
    console.log(`server is running on http://localhost:${port_number}`)

})

// to run the backend server use `node index.js`