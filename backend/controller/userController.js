const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


// @Login
// @Route POST api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const userInput = req.body;
    if (!userInput.phone || !userInput.loginPin) {
        res.status(400);
        throw new Error('Phone or Login PIN is missing!');
    }
    // check user email and get the user data
    const user = await User.findOne({ phone });
    // check the password
    if (user && (await bcrypt.compare(userInput.loginPin, user.loginPin))) {
        res.status(200).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
});


// @Register
// @Route POST api/users/register-user 
// @access Public
// This is a temporary function, need to refactor
const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    try {
        const { firstName, lastName, phone, loginPin, role } = req.body

        // form validation
        // if (!firstName || !lastName || !phone || !phone.length != 10 || !loginPin || !loginPin.length != 4 || !role) {
        //     res.status(400)
        //     throw new Error('Please add all fields')
        // }
        console.log('teest 1')
        // if user already exists in the db
        const userExists = await User.findOne({ phone });
        if (userExists) {
            res.status(400)
            throw new Error('User already exists');
        }
        console.log('teest 2')

        // hash the Password
        const salt = await bcrypt.genSalt(10);
        const hashedLoginPin = await bcrypt.hash(loginPin, salt);
        console.log(hashedLoginPin)


        // create tempUser
        try {
            const user = await User.create({
                firstName, lastName, phone, role, loginPin: hashedLoginPin,
            });
        } catch (error) {
            console.log(error)
        }

        console.log('teest 4')

        // further execution passes to the below function in the email middleware
        if (user) {
            res.status(201).json(user)
        } else {
            res.status(400)
            throw new Error('Error create user record!')
        }
    } catch (error) {
        res.status(401)
        throw new Error('Error creating user record!')
    }

});




// generate JWT Token on success login & register with expiry 5 days
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5d',
    })
}






module.exports = {
    loginUser,
    registerUser
}