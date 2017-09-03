var express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const flash = require('connect-flash')
const app = express()

dotenv.load()

const env = {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
}

app.listen(process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
    // ejs npm install ejs --save
    // jade
    // pug

// This will configure Passport to use Auth0
const strategy = new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:8080/callback'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        return done(null, profile);
    }
);

passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
    done(null, user)
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// view engine setup
// var engines = require('consolidate');

// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: 'shhhhhhhhh',
        resave: true,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Handle auth failure error messages
app.use(function(req, res, next) {
    if (req && req.query && req.query.error) {
        req.flash("error", req.query.error);
    }
    if (req && req.query && req.query.error_description) {
        req.flash("error_description", req.query.error_description);
    }
    next();
});

// Check logged in
app.use(function(req, res, next) {
    res.locals.loggedIn = false;
    if (req.session.passport && typeof req.session.passport.user != 'undefined') {
        res.locals.loggedIn = true;
    }
    next();
});

// app.use('/', routes);
// app.use('/user', user);
// need to move when making my routes
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
app.get('/', ensureLoggedIn, function(req, res, next) {
    console.log(req.user);
    res.redirect('./newsfeed');
});

//route to newsfeed
app.get('/newsfeed', (req, res) => {
    res.render('newsfeed.html')
});

//route to the user's personal feed page
app.get('/favorites', () => {
    res.render('./personal-feed');
});

app.get('/login', passport.authenticate('auth0', {
        responseType: 'code',
        audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
        scope: 'openid profile'
    }),
    function(req, res) {
        res.redirect("/");
    });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/callback',
    passport.authenticate('auth0', {
        failureRedirect: '/failure'
    }),
    function(req, res) {
        res.redirect(req.session.returnTo || '/user');
    }
);

app.get('/failure', function(req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}




// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
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