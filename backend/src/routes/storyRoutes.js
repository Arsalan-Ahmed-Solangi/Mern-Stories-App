const express = require('express');
const { getStories,getSingleStory, newStory } = require('../controllers/storyController');
const router = express.Router();


router.get("/",getStories );
router.get("/:id",getSingleStory);
router.post("/newStory",newStory );



module.exports = router;