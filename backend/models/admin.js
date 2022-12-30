const mongoose = require('mongoose');
const adminSchma= new mongoose.Schema({
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
        type:Date
    }

},
{
    collection:'admin'
    }
);
module.exports= mongoose.model('admin', adminSchma); // map models to schema
