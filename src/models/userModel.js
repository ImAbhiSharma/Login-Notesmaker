const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({

    fname:{
        type: String,
        required:true
    },

    lname:{
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        enum:["Mr", "Mrs", "Miss"]
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    is_deactivate:{
        type: Boolean,
        default : false
    }
}, {timestamps : true}

);

module.exports = mongoose.model('userModel', userSchema)//Usermodel