const express = require('express');
const { getStories,getSingleStory, newStory,updateStory,deleteStory,likeStory } = require('../controllers/storyController');
const authToken = require('../middlewares/authMiddleware');
const router = express.Router();


router.get("/",getStories );
router.get("/:id",getSingleStory);

router.post("/newStory",authToken,newStory );
router.post("/updateStory/:id",authToken,updateStory );
router.delete("/deleteStory/:id",authToken,deleteStory );
router.put("/likeStory/:id",authToken,likeStory );




module.exports = router;