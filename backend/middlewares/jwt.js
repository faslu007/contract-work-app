const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');



// protect middleware for user validation
// all the routes passing this middleware will have access to user info (variable = req.user) from which additional privilege validatoin can be performed
const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from the header
            token = req.headers.authorization.split(' ')[1]
            // verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.userId = decoded.id
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not autherized, no token');
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not autherized')
    }
})


module.exports = { protect };