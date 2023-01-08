const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            trim: true
        },
        addr: {
            type: String,
            required: true,
        },
        scl : { 
            type: String,
            required: true,
        } 
});

const user = mongoose.model('User', userSchema);
module.exports = user;