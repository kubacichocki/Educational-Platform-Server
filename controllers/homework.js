// validation controller
const Joi = require('joi')
const Homework = require("../models/Homework");
const HomeworkSubmitted = require("../models/HomeworkSubmitted")
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


  exports.submitHomework = async (req, res) => {
    console.log(req.body.student)
    const homeworkSubmitted = new HomeworkSubmitted({
      assignment: sanitize(req.body.assignment),
      student: sanitize(req.body.student),
      deadline: sanitize(req.body.deadline), 
      submit: sanitize(req.body.submit) 
    });

    homeworkSubmitted.deadline instanceof Date;
    console.log(homeworkSubmitted)
    // Add a user to the database
    try {
      const savedHomework = await homeworkSubmitted.save();
      res.status(201).send("Adding success!");
    } catch (error) {
      res.status(400).send(error.details);
    }
  };

  // exports.markHomework = async (req, res) => {

  //   //console.log("Grade"+req.body.grade)

  //   const homeworkMarked = new HomeworkSubmitted({
  //     assignment: sanitize(req.body.assignment),
  //   });
  //   try {
  //     //console.log("Wchodze grade :" + req.body.grade)
  //     await HomeworkSubmitted.updateOne({ assignment: req.body.assignment }, {
  //       grade: req.body.grade
  //     });
  //     const doc = await HomeworkSubmitted.findOne({assignment: req.body.assignment});
  //     console.log("zupdateowany grade: "+doc)
  //     res.status(201).send("Adding success!");
  //   } catch (error) {
  //     res.status(400).send(error.details);
  //   }
  // };


  exports.getHomework = async (req, res) =>{
    Homework.find({}, function(err, users) {
      var userMap = {};
      users.forEach(function(user) {
        userMap[user._id] = user;
      });    
      return res.send(userMap); 
    });
  }

  exports.getSubmitted = async (req, res) =>{
    HomeworkSubmitted.find({}, function(err, users) {
      var userMap = {};
      users.forEach(function(user) {
        userMap[user._id] = user;
      });    
      return res.send(userMap); 
    });
  }