const express = require('express');
const { getStories,getSingleStory, newStory,updateStory,deleteStory } = require('../controllers/storyController');
const authToken = require('../middlewares/authMiddleware');
const router = express.Router();


router.get("/",getStories );
router.get("/:id",getSingleStory);

router.post("/newStory",authToken,newStory );
router.post("/updateStory/:id",authToken,updateStory );
router.delete("/deleteStory/:id",authToken,deleteStory );



module.exports = router;