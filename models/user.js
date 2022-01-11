const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    rollnumber:{
        type: Number,
        required: true,
        unique:true
    },
    Class:{
        type: String,
        required: true,

    },
    Mark:[{
        subject:{
            type: String
        },
        mark:{
            type: Number
        }
    }],
    Address: {
        Line1: String,
        Line2: String,
        City: String,
        state: String,
        Zip: String

    },
    amount:{
           type: Number
    }
})

const userModel = new mongoose.model('user',User);
module.exports = userModel;