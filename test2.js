const { articleModel } = require("./articleModels");
const chai = require("chai");
const mongoose = require("mongoose")
chai.should();

describe("test", () => {
    it('should run!', () => {
        // maybe incorrect method for saving
        return mongoose.connect("mongodb://Thinkful:Mongo@ds125335.mlab.com:25335/newsfeed_test").then(() => {
            return articleModel.create({ url: '123' });
        });
    })
})