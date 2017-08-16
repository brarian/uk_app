var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 27017);


app.get('/', function(req, res) {
    res.render('/public');
});

let server;

function runServer() {
    const port = process.env.PORT || 27017;
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve(server);
            })
            .on('error', err => {
                reject(err);
            });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        console.log('closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
        });
    });

}

if (require.main == module) {
    runServer().catch(err => console.error(err));
};

module.exports = { runServer, app, closeServer };