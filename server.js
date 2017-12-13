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
const morgan = require('morgan');
const jsonwebtoken = require('jsonwebtoken');


MongoClient = require('mongodb').MongoClient;
dotenv.load();
app.use(morgan('dev'));

app.set('secret', config.secret);

const env = {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
}

const { PORT } = require('./config');
const { articleModel } = require('./articleModels');

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
app.use(bodyParser.urlencoded({ extended: true }));

//cors set up 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') { return res.sendStatus(204); }
    next();
});

app.get('/', (req, res) => {
    res.render('newsfeed.ejs');
});


//route to the user's personal feed page
app.get('/favorites', (req, res) => {
    res.render('favorites.html');
});

let server;

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
            res.status(500).json({ error: 'could not retrieve saved articles' });
        });
});


app.post('/favorites', (req, res) => {
    console.log(req.user);
    const newSourceToDB = req.body.source;
    const newArticleToDb = req.body.article;
    const mergedArticle = Object.assign({ source: newSourceToDB }, newArticleToDb);
    articleModel 
        .create(mergedArticle)
        .then(article => {
            const { author, title, description, url, urlToImage, _id, notes } = article;
            res.status(201).json({ author, title, description, url, urlToImage, id: _id });
            res.send(article);   
        })
        .catch(err => {
            res.status(500).json({ error: 'could not save articles in database' });
        });
})

app.delete('/api/favorites/:id', (req, res, next) => {
    console.log(req.params);
    articleModel.findByIdAndRemove({ _id: req.params.id })
        .then(article => {
            res.json({ message: "deleted!!" }).status(204);
        })
        .catch(err => {
            res.status(500).json({ error: 'could not delete' });
        });
});

app.put('/api/favorites/:id', (req, res) => {
    const note = req.body.note;
    console.log(note);
    console.log("id", req.params.id);
    articleModel
        .findByIdAndUpdate(req.params.id, { $push: { notes: note } })
        .then(article => {
            res.status(200).json({ message: "updated note" });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'could not update note' })
        })
});


module.exports = { app, runServer, closeServer };