const express = require('express');
const port = process.env.PORT || 3000;
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();
const path = require('path');

const Service = require('./models/service')


connectDb();

const app = express();



// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}


app.listen(port, () => console.log(`Server started on port ${port}`));