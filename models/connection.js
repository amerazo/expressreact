require("dotenv").config();
const { MONGODB_URL } = process.env; // process.env is an object 
// { PORT: 4000, MONGODB_URL: 'mongodb://localhost:27017/animals' }
const mongoose = require("mongoose");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URL)

mongoose.connection
    .on('open', () => console.log('you are connected'))
    .on('close', () => console.log('you are disconnected'))
    .on('error', (error) => console.log(error))

module.exports = mongoose;