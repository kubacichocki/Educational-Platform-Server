//import controllers
const { register, login } = require('../controllers/auth')

//import only router
const router = require('express').Router()

router.post('/register', register)
router.post('/login', login)

//export module
module.exports = router;