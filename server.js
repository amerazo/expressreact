///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config()
const { PORT, MONGODB_URL } = process.env; // process.env is an object { PORT: 4000 }
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const peopleRouter = require('./controllers/people')

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // Parse JSON bodies (as sent by API clients)
app.use('/people', peopleRouter)


///////////////////////////////
// ROUTES
////////////////////////////////
app.get('/', (req, res) => {
    res.send('hello world')
})

///////////////////////////////
// ROUTES
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));