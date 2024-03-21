const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({


    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default:[]

    },
    image: {
        type: String,
        required: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }


});


module.exports = mongoose.model("stories", storeSchema)