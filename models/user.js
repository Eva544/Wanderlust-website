const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose, {
    passwordValidator: function(password, cb) {
        if (password.length < 8) {
            return cb("Password must be at least 8 characters long");
        }
        return cb();
    }
});

module.exports = mongoose.model("User", userSchema);