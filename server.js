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
const User = require('./user')
const mongo = require('mongodb');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

MongoClient = require('mongodb').MongoClient;
dotenv.load();
app.use(morgan('dev'));

app.use(passport.initialize());

const {
    PORT
} = process.env.DATABASE_URL;
const {
    articleModel
} = require('./articleModels');
const secret =   process.env.secret;

mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(logger('dev'));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//cors set up 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

app.use(function (req, res, next) {
    if (!req.cookies['APPLOGIN']) {
        return next();
    } else {
        let token = req.cookies['APPLOGIN'];
        try {
            let data = jwt.verify(token, secret);
            if (data && data.id) {
                User
                    .findById(data.id)
                    .lean()
                    .then(user => {
                        if (user) {
                            req.user = user;
                            return next();
                        }
                    })
                    .catch(err => {
                        return next();
                    })
            } else {
                return next();
            }
        } catch (e) {
            return next();
        }
    }
});


app.post('/register', (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: 'please enter email and password to register'
        });
    } else {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        //save new user 
        newUser.save(function (err) {

            if (err) {
                return res.json({
                    success: false,
                    message: err
                })
            }
            res.json({
                sucess: true,
                message: 'successfully created new user'
            })
        });
    }
});

app.get('/api/users', (req, res) => {
    User.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: 'could not retrieve saved users'
            });
        });
});


//authenticate token
app.post('/authenticate', (req, res) => {
    console.log(req.method);
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.send({
                success: false,
                message: 'authentication failed, user not found.'
            })
        } else {
            //check if passowrd matches 
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    const token = jwt.sign(user.toObject(), secret, {
                        expiresIn: 10000
                    });
                    res.json({
                        sucess: true,
                        token: token
                    })
                } else {
                    res.send({
                        success: false,
                        message: 'authentication failed, Password did not match.'
                    })
                }
            });
        }
    });
});

app.get('/', (req, res) => {
    res.render('newsfeed.ejs', {
        loggedIn: req.user ? true : false,
        email: req.user ? req.user.email : null
    });
});


app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/signout', (req, res) => {
    res.cookie('APPLOGIN', null, {
        maxAge: 0
    });
    res.render('signout.ejs');
});

app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    return User.findOne({
        email
    }).then((user) => {
        if (!user) {
            return res.send({
                success: false,
                message: 'authentication failed, user not found.'
            })
        } else {
            //check if passowrd matches 
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    let usr = {
                        id: user._id
                    };
                    const token = jwt.sign(usr, secret, {
                        expiresIn: 10000
                    });
                    res.cookie('APPLOGIN', token, {
                        httpOnly: true
                    });
                    return res.redirect('/');
                } else {
                    return res.send({
                        success: false,
                        message: 'authentication failed, Password did not match.'
                    })
                }
            });
        }
        console.log('done!!!');
    }).catch(error => console.log(error));
    // User.findAll({
    //     attributes: { exclude: ['password'] }
    //   }).then(users => console.log(users));
    return true;
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

//route to the user's personal feed page
app.get('/favorites', (req, res) => {
    if(req.user){
        res.render('favorites.ejs');
    // }else{
    //     res.redirect('/');
    }
});

let server;

function runServer(database = config.DATABASE_URL, port = 8080) {
    return new Promise((resolve, reject) => {
        mongoose.connect(database, err => {
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

app.get('/api/favorites', (req, res) => {
    articleModel.find({})
        .then(articles => {
            res.json(articles);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: 'could not retrieve saved articles'
            });
        });
});


app.post('/favorites', (req, res) => {
    const newSourceToDB = req.body.source;
    const newArticleToDb = req.body.article;
    const mergedArticle = Object.assign({
        source: newSourceToDB
    }, newArticleToDb);
    articleModel
        .create(mergedArticle)
        .then(article => {
            const {
                author,
                title,
                description,
                url,
                urlToImage,
                _id,
                notes
            } = article;
            res.status(201).json({
                author,
                title,
                description,
                url,
                urlToImage,
                id: _id
            });
            res.send(article);
        })
        .catch(err => {
            res.status(500).json({
                error: 'could not save articles in database'
            });
        });
})

app.delete('/api/favorites/:id', (req, res, next) => {
    console.log(req.params);
    articleModel.findByIdAndRemove({
            _id: req.params.id
        })
        .then(article => {
            res.json({
                message: "deleted!!"
            }).status(204);
        })
        .catch(err => {
            res.status(500).json({
                error: 'could not delete'
            });
        });
});

app.put('/api/favorites/:id', (req, res) => {
    const note = req.body.note;
    console.log(note);
    console.log("id", req.params.id);
    articleModel
        .findByIdAndUpdate(req.params.id, {
            $push: {
                notes: note
            }
        })
        .then(article => {
            res.status(200).json({
                message: "updated note"
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: 'could not update note'
            })
        })
});


module.exports = {
    app,
    runServer,
    closeServer
};