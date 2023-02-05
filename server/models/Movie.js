const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = new schema({
  name: {
    type: String,
    required: true,
    max: 250,
  },
  staring: [
    {
      type: String,
      required: true,
      max: 250,
    },
  ],
  director: {
    type: String,
    required: true,
    max: 250,
  },
  music: [
    {
      type: String,
      required: true,
      max: 250,
    },
  ],
  dateOfRelease: {
    type: Date,
  },
  platform: [
    {
      type: String,
      required: true,
      max: 250,
    },
  ],
  geners: [
    {
      type: String,
      required: true,
      max: 250,
    },
  ],
  likes: [
    {
      type: Number,
      user: {
        type: String,
      },
    },
  ],
  ratings: [
    {
      type: Number,
      user: {
        type: String,
      },
    },
  ],
});

module.exports = Movie = mongoose.model("Movie", movieSchema, "Movies");
