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
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const mongo = require('mongodb');
MongoClient = require('mongodb').MongoClient;
dotenv.load();

const env = {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
}

const { PORT } = require('./config');
const { articleModel } = require('./articleModels');

// const apiRouter = require('./apiRouter');

mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(logger('dev'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors set up 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') { return res.sendStatus(204); }
    next();
});



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
// app.get('/favorites', (req, res) => {
//     // res.render('favorites.html');
// });

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
// app.use(function(req, res, next) {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handlers


// // development error handler
// // will print stacktrace

// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }



// production error handler
// no stacktraces leaked to user

// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl = config.DATABASE_URL, port = 8080) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                    console.log(`Your app is listening on port ${port}`);
                    resolve();
                })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer().catch(err => console.error(err));
};
//move endpoints to router folder 
//move not static files out of public 


//endpoints 
app.get('/favorites', (req, res) => {
    articleModel.find({})
        .then(articles => {
            res.send(articles);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not retrieve saved articles' });
        });
    //     articleModel
    //         .find({})
    //         .then(articles => {
    //             res.render("favorites", { articles });
    //         })
    //         .catch(err => {
    //             res.status(500).json({ error: 'could not retrieve articles in database' });
    //         })
});

app.post('/favorites', (req, res) => {
    const newSourceToDB = req.body.source;
    const newArticleToDb = req.body.article;
    const mergedArticle = Object.assign({ source: newSourceToDB }, newArticleToDb);
    articleModel
        .create(mergedArticle)
        .then(article => {
            res.status(201).json({ article });
            const mergedArticle = Object.assign({ source: newSourceToDB }, newArticleToDb)
            articleModel
                .create(mergedArticle)
                .then(article => {
                    const { author, title, description, url, urlToImage, _id } = article;
                    res.status(201).json({ author, title, description, url, urlToImage, id: _id });
                    res.send(body);
                    e5b7b4b0c0b8ff05ce0bc1d0c9104b51184ced64
                })
                .catch(err => {
                    res.status(500).json({ error: 'could not save articles in database' });
                });
        })

    // app.put('/favorites/:id', (req, res) => {
    //     articleModel.findByIdAndUpdate({ _id: req.params.id })
});

app.delete('/favorites/:id', (req, res, next) => {
    articleModel.findByIdAndRemove({ _id: req.params.id })
        .then(function(article) {
            res.send(article).status(204);
        })
        .catch(err => {
            res.status(500).json({ error: 'could not delete' });
        });
});

module.exports = { app, runServer, closeServer };