
const  User  = require('../models/User');


//****getUserInfo******//
exports.userInfo = async (req, res) => {
    

    try { 
        
        const { id } = req.params;
        const user = await User.findById(id);
       
        if(!user){
            return res.status(400).json("User Id is required!");
        }


        return res.status(200).json({ success:true,message:"User Data Fetched",data:user })

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}   