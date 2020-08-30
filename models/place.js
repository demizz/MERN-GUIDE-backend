const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A place must have a Title"],
  },
  description: {
    type: String,
    required: [true, "A place must have a description"],
  },
  image: {
    type: String,
    required: [true, "A place must have a image"],
    default:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  address: {
    type: String,
    required: [true, "A place must have a address"],
  },
  loaction: {
    lat: {
      type: Number,
      default: 40,
    },
    lng: {
      type: Number,
      default: 30,
    },
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
