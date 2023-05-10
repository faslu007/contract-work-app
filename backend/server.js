const express = require('express');
const port = process.env.PORT || 3000;
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();

const Service = require('./models/service')


connectDb();

const app = express();


app.listen(port, () => console.log(`Server started on port ${port}`));