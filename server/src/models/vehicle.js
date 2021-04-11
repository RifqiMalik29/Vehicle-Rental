const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  userId: String,
  photo: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: String,
  stock: { type: String, required: true },
  rating: Number,
});

const vehicleModel = mongoose.model("vehicles", vehicleSchema);

module.exports = vehicleModel;
