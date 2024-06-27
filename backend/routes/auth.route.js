const express = require('express');
const { signup, getUser } = require('../controller/auth.controller');
const router = express.Router();



router.post('/signup',signup)
router.get('/getusers',getUser)






module.exports = router;