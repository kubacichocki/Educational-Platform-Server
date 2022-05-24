//auth route module

//import controllers
const {addHomework, submitHomework, getHomework, getSubmitted, markHomework} = require('../controllers/homework')

//import only router
const router = require('express').Router()

router.post('/add', addHomework)
router.post('/submit', submitHomework)
router.post('/mark', markHomework)
router.get('/get', getHomework)
router.get('/submitted', getSubmitted)
router.get('/test', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
  }); 

  //export module
module.exports = router;