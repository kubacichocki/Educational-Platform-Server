//import components and libraries
const Joi = require('joi')
const Homework = require("../models/Homework");
const HomeworkSubmitted = require("../models/HomeworkSubmitted")
const { homeworkValidation } = require("./homeworkValidation");
const jwt = require("jsonwebtoken");
const sanitize = require('mongo-sanitize');
console.log("test")

//add homework function
exports.addHomework = async (req, res) => {
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

//homework submit function
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

  // get homework from database
  exports.getHomework = async (req, res) =>{
    Homework.find({}, function(err, users) {
      var userMap = {};
      users.forEach(function(user) {
        userMap[user._id] = user;
      });    
      return res.send(userMap); 
    });
  }

  //get submitted assessments
  exports.getSubmitted = async (req, res) =>{
    HomeworkSubmitted.find({}, function(err, users) {
      var userMap = {};
      users.forEach(function(user) {
        userMap[user._id] = user;
      });    
      return res.send(userMap); 
    });
  }