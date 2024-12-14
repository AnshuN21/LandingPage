const mongoose = require("mongoose");

const happyClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true }, 
  image: { type: String }, 
});

const HappyClient = mongoose.model("HappyClient", happyClientSchema);

module.exports = HappyClient;

