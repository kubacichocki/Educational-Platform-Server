// validation controller
const Joi = require('joi')
const Homework = require("../models/Homework");
const { homeworkValidation } = require("./homeworkValidation");
const jwt = require("jsonwebtoken");
const sanitize = require('mongo-sanitize');
console.log("test")

/*
var multer = require('multer'); 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });
*/



exports.addHomework = async (req, res) => {
    // Validate the data
    //const { error } = homeworkValidation(req.body);
    //if (error) return res.status(400).send(error.details[0].message);
    console.log(req.body.deadline)
    console.log(req.body.teacher)
    // Add new homework
    const homework = new Homework({
      assignment: sanitize(req.body.assignment),
      teacher: sanitize(req.body.teacher),
      deadline: sanitize(req.body.deadline),  
    });
    homework.deadline instanceof Date;
    console.log(homework)
    // Add a user to the database
    try {
      const savedHomework = await homework.save();
      res.status(201).send("Adding success!");
    } catch (error) {
      res.status(400).send(error.details);
    }
  };
