const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    age: {
        type: String
    },
    dob:{
        type: Date,
        required: true
        },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
        
    },
    cPassword: {
        type: String,
        required: true
    }
   
},
{
    collection:'client'
    }
)

module.exports = mongoose.model('client', clientSchema);