// create User model
const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    assignment: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    teacher: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    deadline: {
        type: Date
    },
   /* img:
    {
        data: Buffer,
        contentType: String,
    } */
})

module.exports = mongoose.model('Homework',homeworkSchema)