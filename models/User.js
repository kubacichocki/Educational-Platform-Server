//import libraries
const mongoose = require('mongoose')

// create User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    avatar_id: {
      type: Number,
      default: 0  
    }
})

//export module
module.exports = mongoose.model('User',userSchema)