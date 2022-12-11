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
    }

},
{
    collation:'admin'
    }
);
module.exports= mongoose.model('admin', adminSchma); // map models to schema
