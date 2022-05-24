//import libraries
const Joi = require('joi')

//validate register input
const registerValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

//export module
module.exports.registerValidation = registerValidation
