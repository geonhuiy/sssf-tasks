const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: { type: Date, default: Date.now },
  gender: {
    type: String,
    enum: ['male', 'female'],
    color: String,
    weight: Number
  }
});
