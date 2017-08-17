const chai = require('chai');
const chaiHttp = require('chai-http');

const { app, runServer, closeServer } = require('./server');

const should = chai.should();

chai.use(chaiHttp);

describe('/', () => {
    it('should return a status of 200', () => {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                res.should.have.status(200);
            });
    });
});