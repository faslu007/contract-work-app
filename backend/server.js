const express = require('express');
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const path = require('path');
const Service = require('./models/service')
const ngrok = require('ngrok');
var colors = require('colors');
colors.enable()
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/user')
const { errorHandler } = require('./middlewares/errorMiddleware')



connectDb();

const app = express();


// for parsing application/json
app.use(bodyParser.json());
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// cors - cross origin sharing - (http-request)
app.use(cors());


// all routes
app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/accounts', require('./routes/accountsRoutes'));
// app.use('/api/inNetwork', require('./routes/inNetworkRoutes'));
// app.use('/api/openIssues', require('./routes/openIssuesRoutes'));
// app.use('/api/portalLogins', require('./routes/portalLoginsRoutes'));
// app.use('/api/pif', require('./routes/pifRoutes'));



// Connect to ngork public ip on development environment
if (process.env.NODE_ENV === 'development') {
    async function connectToNgrork() {
        const url = await ngrok.connect(3000);
        console.log(`Ngrok URL: ${url}`.underline.blue);
    }

    // connectToNgrork()

}


// Serve frontend on production env
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


// error handler middleware - return structured error message - this should be always placed beneath the routes to work
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.underline.yellow));