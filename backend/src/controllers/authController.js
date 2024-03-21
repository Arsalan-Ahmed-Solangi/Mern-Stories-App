
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User  = require('../models/User');


//****SignIn******//
exports.signIn = async (req, res) => {
    

    try {

        const user = await User.findOne({ Email: req.body.email });
        if(!user){
            return res.status(400).json("Wrong Credentials");
        }

        const checkPassword = await bcrypt.compare(req.body.password,user.Password);
        if(!checkPassword){
            return res.status(400).json("Wrong Credentials");

        }

        
        const token = jwt.sign({ id: user._id, Name: user.Name }, process.env.JWT_TOKEN,{ expiresIn: '30s' });
        
         const { password, ...others } = user._doc;
            return res.status(200).json({
                success: true,
                data:others,
                token:token,
                message: "Login Successful!",
            });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);

    }

}   

//****SignUp******//
exports.SignUp = async (req, res) => {
    
    try {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt); 

        const user = new User({
            Name:req.body.username,
            Email:req.body.email,
            Password:hashPassword,
        });

        const saveUser = await user.save();
        res.status(200).json({
            success:true,
            message:"User Registered Successfully!",
            user : saveUser
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }

}   