const express = require('express'); //Line 1
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const homework = require('./routes/homework')
const request = require('request')
const bodyParser = require('body-parser')
var cors = require('cors')
require("dotenv").config();


const app = express(); //Line 2


// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Lin

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


app.get('/test/:id', (req,res) =>{
    console.log(req.params.id)
})

app.use('/auth', auth)
app.use('/homework', homework)



const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


