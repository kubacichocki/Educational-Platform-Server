// validation controller
const Joi = require('joi')

//naming
const homeworkValidation = (data) =>{
    const schema = Joi.object({
        assignment: Joi.string().min(6).required(),
        teacher: Joi.string().min(6).required(),
        deadline: Joi.string().min(6).required(),
    })
}
module.exports.homeworkValidation = homeworkValidation