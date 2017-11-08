const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleModelSchema = new mongoose.Schema({
    source: { type: String, required: false },
    author: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: true },
    urlToImage: { type: String, required: false },
    notes: { type: Array, required: false },
});


const articleModel = mongoose.models.articleModel || mongoose.model('articleModel', articleModelSchema);
module.exports = { articleModel };