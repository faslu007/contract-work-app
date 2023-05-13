const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const mongoosePaginate = require('mongoose-paginate-v2');



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
    // Destructure required fields from request body
    const { firstName, lastName, phone, communicationPhone, loginPin, role } = req.body;


    // Check if required fields are missing
    if (!firstName || !lastName || !phone || !role) {
        let missingFields = []
        if (!firstName) missingFields.push('First Name')
        if (!lastName) missingFields.push('Last Name')
        if (!phone) missingFields.push('Phone')
        if (!role) missingFields.push('Role')
        res.status(400)
        throw new Error('Please add all fields')
    };
    try {
        // Check if user already exists with the provided phone number
        const isUserAlreadyExists = await User.findOne({ phone: phone });
        if (isUserAlreadyExists) {
            res.status(400).json({
                message: 'User with the provided phone number already exists.'
            });
            return;
        }

        // Create user record in the database
        const user = await User.create({
            firstName, lastName, phone, communicationPhone, loginPin, role
        });

        // Respond with created user record
        if (user) {
            res.status(201).json(user)
        } 
    } catch (error) {
        // Catch and handle any errors
        console.error(error);
        res.status(500)
        throw new Error('Error creating user record!')
    }
});


// @Find Users based on query string - To use in Async-Type-Search
// @Route POST get/users/findUsersByQueryString/query?: 
// @access Public
const findUsersByQueryString = asyncHandler(async (req, res) => {
    const { q } = req.params;
    if (q) {
        const users = await User.find({
            $or: [
                { firstName: { $regex: q, $options: "i" } },
                { lastName: { $regex: q, $options: "i" } },
            ],
        });
        res.json(users);
    } else {
        const users = await User.find({});
        res.json(users);
    }
});



const getUsers = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
    };

    const query = {};

    // Add any additional query parameters based on your requirements
    // Example:
    // if (req.query.firstName) {
    //   query.firstName = req.query.firstName;
    // }

    const users = await User.paginate(query, options);

    res.json(users);
});



// @Edit user by id
// @Route PUT /id?: 
// @access Private
const editUser = asyncHandler(async (req, res) => {
    const { id } = req.query;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
});



// generate JWT Token on success login & register with expiry 5 days
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5d',
    })
}






module.exports = {
    loginUser,
    registerUser,
    findUsersByQueryString,
    getUsers,
    editUser
}