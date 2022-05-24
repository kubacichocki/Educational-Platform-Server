// create User model
const mongoose = require('mongoose')

const homeworkSubmitted = new mongoose.Schema({
    assignment: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    student: {
        type: String,
        min: 6,
        max: 255
    },
    deadline: {
        type: Date
    },
    submit: {
        type: String,
    },
    grade: {
        type: String,
    }
   /* img:
    {
        data: Buffer,
        contentType: String,
    } */
})

module.exports = mongoose.model('HomeworkSubmitted',homeworkSubmitted)