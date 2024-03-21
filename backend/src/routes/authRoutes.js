const express = require('express');
const { signIn, SignUp } = require('../controllers/authController');
const router = express.Router();


router.post("/signin",signIn);

router.post("/signup",SignUp);

module.exports = router;