const mongoose = require("mongoose"); //way to import pakages

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  userType: {
    kind: {
      type: String,
      enum: ["admin", "client"],
    },
    item: {
      type: mongoose.Types.ObjectId,
      refPath: "userType.kind",
    },
  },
},
{
collection:'users'
}
);
module.exports = mongoose.model('users',userSchema);
