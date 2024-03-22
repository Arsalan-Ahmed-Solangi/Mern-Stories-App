const jwt = require('jsonwebtoken');
const secret = process.env.JWT_TOKEN 


const authToken = (req, res, next) => {
   
    const token = req.headers['authorization'].split(" ")[1];
   
    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Authorization Token Not Found!"
        });
    }

    jwt.verify(token, secret, (err, user) => {
        
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({
                    success: false,
                    message: 'Token has expired. Please log in again.'
                });
            }
            return res.status(403).json({
                success: false,
                message: "Token & Secret Key Not Matched!"
            });
        }

        req.user = user;
        next();
    });
}

module.exports = authToken;