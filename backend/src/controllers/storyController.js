
const Story = require('../models/Story');
const mongoose = require('mongoose');


//****getStories******//
exports.getStories = async (req, res) => {


    try {

        const getStories = await Story.find();

        if (!getStories) {
            return res.status(400).json({ success: false, message: "No Stories Found!" })
        }

        return res.status(200).json({ success: true, message: "Stories fetched successfully!", data: getStories })

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

//****getStories******//
exports.getSingleStory = async (req, res) => {


    try {
        const { id } = req.params;

        const getStories = await Story.findById(id);
        console.log(getStories);
        if (!getStories) {
            return res.status(400).json({ success: false, message: "No Stories Found!" })
        } else {
            return res.status(200).json({ success: true, message: "Stories fetched successfully!", data: getStories })

        }


    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "No Story Found!", error: error })

    }

}


//****newStory******//
exports.newStory = async (req, res) => {


    try {

        const story = req.body;
        console.log(req.user);
        const newStory = new Story({
            ...story,
            AddedBy: req.user.id ?? 1,
            createdAt: new Date().toISOString()


        })

        await newStory.save();



        return res.status(200).json({ success: true, message: "Story Added Successfully!", data: newStory })

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

//****updateStory******//
exports.updateStory = async (req, res) => {


    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Story Id Not Valid " });
        }

        const story = await Story.findById(id);
        if (!story) {
            return res.status(404).json({ success: false, message: "Story not found!" });
        }

        story.set(req.body); 
        await story.save();
        return res.status(200).json({ success: true, message: "Story Updated Successfully!", data: story })

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

//****DeleteStory******//
exports.deleteStory = async (req, res) => {


    try {

        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "No Story found by Id!" })
        }

        const story = await Story.findById(id);

        if (!story) {
            return res.status(404).json({ success: false, message: "Story not found!" });
        }
        console.log(story);

        await Story.deleteOne({ _id: id })
        return res.status(200).json({ success: true, message: "Story Deleted Successfully!" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "No Story found!", error: error })

    }

}   