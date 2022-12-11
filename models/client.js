const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
   
},
{
    collation:'client'
    }
)

module.exports = mongoose.model('client', clientSchema);