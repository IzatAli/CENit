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
    collation:'client'
    }
)

module.exports = mongoose.model('client', clientSchema);