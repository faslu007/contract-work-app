const express = require('express');
const port = process.env.PORT || 3000;
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();
const path = require('path');

const Service = require('./models/service')


connectDb();

const app = express();



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});


app.listen(port, () => console.log(`Server started on port ${port}`));