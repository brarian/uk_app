const mongoose = require('mongoose');


const newsfeedSchema = new mongoose.Schema({
    author: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { required: true },
    urlToImage: { required: true }
});

module.exports = mongoose.model('Article', newsfeedSchema);