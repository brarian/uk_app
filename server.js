var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
app.use(express.static('public'));
app.use(cors());
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

require('dotenv').config()

//middleware which protects endpoint, requires authorization present before letting them on page

var authCheck = jwt({
    secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
    audience: process.env.AUTH0_CLIENT_ID
});


app.get('/api/public', function(req, res) {
    res.json({
        message: 'public endpoint, you don\'t have to be authorized to access this endpoint '
    });
});

app.get('/api/private', authCheck, function(req, res) {
    res.render('index');
    res.json({ message: 'private endpoint, you NEED to be authorized before you can access this endpoint ' });
});

let server;

function runServer() {
    const port = process.env.PORT || 8080;
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve(server);
        }).on('error', err => {
            reject(err)
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = { app, runServer, closeServer };