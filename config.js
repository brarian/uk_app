exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL || "mongodb://Brarian:Apples55@ds127034.mlab.com:27034/newsfeed_ban";
//variable saved in .env
exports.PORT = process.env.PORT || 3000;