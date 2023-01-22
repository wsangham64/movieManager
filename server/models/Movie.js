const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = new schema({
  name: {
    type: string,
    required: true,
    max: 250,
  },
  staring: [
    {
      type: string,
      required: true,
      max: 250,
    },
  ],
  director: {
    type: string,
    required: true,
    max: 250,
  },
  music: [
    {
      type: string,
      required: true,
      max: 250,
    },
  ],
  dateOfRelease: {
    type: Date,
  },
  platform: [
    {
      type: string,
      required: true,
      max: 250,
    },
  ],
  geners: [
    {
      type: string,
      required: true,
      max: 250,
    },
  ],
  likes: [
    {
      type: Number,
      user: {
        type: string,
      },
    },
  ],
  ratings: [
    {
      type: Number,
      user: {
        type: string,
      },
    },
  ],
});
