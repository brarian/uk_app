var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
app.use(express.static('public'));
app.use(cors());
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var dotenv = require('dotenv');


dotenv.load();
//middleware which protects endpoint, requires authorization present before letting them on page

var authCheck = jwt({
    secret: new Buffer('PE_mA1D9rtA_oTUfq4whaiF-i5GIV8EvQTcw_tnmOVD3CXXVuDl9iUXuRFI5f342', 'base64'),
    audience: '90Hwg_Ap6Jdfi5KLUBCsE3SU_FQhBdZE'
});

const strategy = new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        return done(null, profile);
    }
);

passport.use(strategy);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());
/* GET home page. */
app.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

// Perform session logout and redirect to homepage
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
app.get(
    '/callback',
    passport.authenticate('auth0', {
        failureRedirect: '/'
    }),
    function(req, res) {
        res.redirect(req.session.returnTo || '/user');
    }
);

function runServer() {
    const port = process.env.PORT || 8080;
    return new Promise((resolve, reject) => {
        app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
            .on('error', err => {
                reject(err);
            });
    });
}

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