const express = require('express');
const { userInfo} = require('../controllers/userController');
const router = express.Router();


router.get("/info/:id",userInfo);


module.exports = router;