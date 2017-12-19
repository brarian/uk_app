const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        unique: true, 
        lowercase: true, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }
});

//save the user's hashed pw 
UserSchema.pre('save', function(next){
    var user = this; 
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt){
            if(err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) {
                    return next(err)
                }
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
});

// Create method to cpmare password 
UserSchema.methods.comparePassword = function(pw, cb) {
    bcrypt.compare(pw, this.password, function(err, isMatch){
        if (err) {
            return cb(err)
        }
        cb(null, isMatch)
    });
};

module.exports = mongoose.model('User', UserSchema);