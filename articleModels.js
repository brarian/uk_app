const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleModelSchema = new mongoose.Schema({
    author: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: true },
    urlToImage: { type: String, required: false },
    notes: { type: String, required: false },
    source: { type: String, required: true }
});


const articleModel = mongoose.models.articleModel || mongoose.model('articleModel', articleModelSchema);
module.exports = { articleModel };