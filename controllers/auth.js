// auth controller
const User = require("../models/User");
const { registerValidation } = require("./registerValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const websiteRoute = require("../routes/website");
const sanitize = require("mongo-sanitize");

exports.register = async (req, res) => {
  // Validate the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ name: req.body.name });
  if (emailExist) return res.status(400).send("Name already exists");

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: sanitize(req.body.name),
    password: sanitize(hashedPassword),
  });

  // Add a user to the database
  try {
    const savedUser = await user.save();
    res.status(201).send("Register success!");
    // res.send({user: user._id})
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  // Validate the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the name exists
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(400).send("Name does not exist");

  // Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  // Create and assign a token
  //const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
  res.status(200).send("1");
  // res.render('game.ejs', {testObject: req.body.name})
  // res.header('auth-token', token).send(token)
};