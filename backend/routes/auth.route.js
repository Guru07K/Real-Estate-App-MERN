const express = require('express');
const { signup, getUser, signin } = require('../controller/auth.controller');
const router = express.Router();



router.post('/signup',signup)
router.post('/signin',signin)
router.get('/getusers',getUser)






module.exports = router;