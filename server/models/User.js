const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  firstName: {
    type: sting,
    required: true,
    max: 50,
  },
  lastName: {
    type: sting,
    required: true,
    max: 50,
  },
  username: {
    type: sting,
    required: true,
    max: 15,
  },
  password: {
    type: sting,
    required: true,
    max: 12,
  },
  gender: {
    type: sting,
    required: true,
    max: 10,
  },
  favourite,
  theater,
  ott,
  watchListOtt,
  watchListTheater,
  profile,
  friends,
  suggession,
});

module.exports = User = mongoose.model("User", UserSchema);
