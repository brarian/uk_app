const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');


const { app, runServer, closeServer } = require('./server');

const should = chai.should();

chai.use(chaiHttp);


describe("Testing mongoose", () => {
    it('does something', () => {
        const model = require('./articleModels');
    })
})

describe('/newsfeed', () => {
    before(function() {
        return runServer('mongodb://Brarian:Apples55@ds125335.mlab.com:25335/newsfeed_test');
    });

    after(function() {
        return closeServer();
    });
    it('should return a status of 200', () => {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                res.should.have.status(200);
            });
    });
});

describe('POST /favorites', () => {
    return it('should post an article correctly', () => {
        chai.request(app)
        app.post('/favorites/')
            .set("Content-Type", "application/json")
            .send({
                "author": "Matthew Lynley",
                "description": "MongoDB has finished up what is essentially the final step in going public, pricing its IPO at $24 and raising $192 million in the process. The company will..",
                "publishedAt": "2017-10-19T00:11:31Z",
                "title": "MongoDB prices its IPO at $24 per share",
                "url": "https://techcrunch.com/2017/10/18/mongodb-prices-its-ipo-at-24-per-share/",
                "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/06/9371876094_781f3e5228_o-1.jpg"
            })
            .then((res) => {
                console.log(res)
                res.should.have.status(201);
                res.type.should.equal('application/json');
                res.body.should.include.keys(
                    'author', 'description', 'title', 'urlToImage', 'url', 'id'
                );
            });
    });
});
// });

describe('GET /favorites', () => {
    it('should retrieve all the articles in the database', () => {
        return chai.request(app)
        app.get('/favorites')
            .then((res) => {
                res.should.have.status(200);
                res.body.should.have.length.of.at.least(1);
            })
    });
});

describe('DELETE /favorites/:id', () => {
    it('should delete an article given the id', () => {
        return chai.request(app)
        app.delete('/favorites/' + article[0].id)
            .then((res) => {
                res.should.have.status(204);
                res.should.be.json;
                res.body.should.be.a('object');
            });
    });
});