const chai = require('chai');
const chaiHttp = require('chai-http');

const { app, runServer, closeServer } = require('./server');

const should = chai.should();

chai.use(chaiHttp);

describe('/newsfeed', () => {
    before(function() {
        return runServer();
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


describe('/favorites', () => {
    before(function() {
        return runServer();
    });

    after(function() {
        return closeServer();
    });
    it('should return a status of 200', () => {
        return chai.request(app)

        .get('/favorites')
            .then(function(res) {
                res.should.have.status(200);
            });
    });
});

describe('POST /favorites', () => {
    it('should post an article correctly', () => {
        return chai.request(app)
            .post('/favorites')
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
                res.should.have.status(201);
                res.type.should.equal('application/json');
                res.body.should.include.keys(
                    'author', 'description', 'title', 'urlToImage', 'url'
                );
            });
    });
});

// describe('DELETE /favorites/:id', () => {
//     it('should delete an article correctly', (done) => {
//         return chai.request(app)
//             .delete('/favorites/:id')
//             .end((err, res) => {
//                 should.not.exist(err);
//                 res.status.should.equal(201);
//                 res.type.should.equal('application/json');
//                 res.body.data[0].should.include.keys(
//                     'author', 'description', 'publishedAt', 'title', 'url', 'urlToImage', 'id')
//             });
//     });
// });