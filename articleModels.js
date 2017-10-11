const mongoose = require('mongoose');

const articleModelSchema = new mongoose.Schema({
    author: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    notes: { type: String, required: false }
});

const articleModel = mongoose.model('articleModel', articleModelSchema);
module.exports = { articleModel };