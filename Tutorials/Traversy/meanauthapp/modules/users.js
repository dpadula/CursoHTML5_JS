const mongoos = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username : username}
    User.findByOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
 bcrypt.genSalt(10, )
}