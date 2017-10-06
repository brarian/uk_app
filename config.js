exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    //variable saved in .env
    DATABASE;
exports.PORT = process.env.PORT || 3000;