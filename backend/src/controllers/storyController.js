
const  Story  = require('../models/Story');


//****getStories******//
exports.getStories = async (req, res) => {
    

    try { 
        
      const getStories = await  Story.find();

      if(!getStories){
        return res.status(400).json({success:false,message:"No Stories Found!"})
      }
      
     return res.status(200).json({success:true,message:"Stories fetched successfully!",data: getStories})

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}   

//****getStories******//
exports.getSingleStory = async (req, res) => {
    

    try { 
      const {id} = req.params;
      
      const getStories = await  Story.findById(id);

      if(!getStories){
        return res.status(400).json({success:false,message:"No Stories Found!"})
      }
      
     return res.status(200).json({success:true,message:"Stories fetched successfully!",data: getStories})

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}  


//****newStory******//
exports.newStory = async (req, res) => {
    

    try { 
        
   
     return res.status(200).json({success:true,message:"Stories fetched successfully!",data: []})

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}   