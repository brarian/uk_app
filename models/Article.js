const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const newsfeedSchema = new mongoose.Schema({
    article: {},
    comments: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Article', newsfeedSchema);