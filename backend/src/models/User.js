const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        unique:true,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }

});

module.exports =  mongoose.model('User', userSchema);


