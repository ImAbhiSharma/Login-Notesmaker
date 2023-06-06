const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({

    Fname:{
        type: String,
        required:true
    },

    Lname:{
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
    }

},

{timeStamp:true}

);

module.exports = mongoose.model('userModel', userSchema)//Usermodel