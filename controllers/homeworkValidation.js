//import libraries
const Joi = require('joi')

// validate homework input
const homeworkValidation = (data) =>{
    const schema = Joi.object({
        assignment: Joi.string().min(6).required(),
        teacher: Joi.string().min(6).required(),
        deadline: Joi.string().min(6).required(),
    })
}

//export module
module.exports.homeworkValidation = homeworkValidation