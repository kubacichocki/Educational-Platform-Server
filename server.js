//import libraries and components
const express = require('express'); 
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const homework = require('./routes/homework')
const request = require('request')
const bodyParser = require('body-parser')
var cors = require('cors')
require("dotenv").config();
//initialize express
const app = express(); 

app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

// connect database
try {
    console.log(process.env.MONGODB_URI)
    mongoose.connect(
        process.env.MONGODB_URI,
         { useUnifiedTopology: true, useNewUrlParser: true }, 
         () =>
         console.log('db connection state: '+ mongoose.connection.readyState)         );
} catch (error) {
    console.log(error);
}


app.use('/auth', auth)
app.use('/homework', homework)

//set up port
const port = process.env.PORT || 5000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


