//auth route module
//const { register, login } = require('../controllers/auth')
const {addHomework} = require('../controllers/homework')

//import only router
const router = require('express').Router()
console.log("DZIALAM")

router.post('/add', addHomework)
router.get('/ex', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  }); //Lin

module.exports = router;