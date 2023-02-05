const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  firstName: {
    type: String,
    required: true,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    max: 50,
  },
  username: {
    type: String,
    required: true,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    max: 12,
  },
  gender: {
    type: String,
    required: true,
    max: 10,
  },
  // favourite,
  // theater,
  // ott,
  // watchListOtt,
  // watchListTheater,
  // profile,
  // friends,
  // suggession,
});

module.exports = User = mongoose.model("User", UserSchema, "Users");
