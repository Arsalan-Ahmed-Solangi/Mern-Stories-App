const jwt = require('jsonwebtoken');
const secret = process.env.JWT_TOKEN || "StoriesApp";


const authToken = (req, req, next) => {

    const token = req.headers['authorization'];

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Authorization Token Not Found!"
        });
    }

    jwt.verify(token, secretKey, (err, user) => {
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