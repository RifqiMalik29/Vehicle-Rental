const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  userId: String,
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: String,
  stock: { type: String, required: true },
  rating: Number,
});

const itemModel = mongoose.model("items", itemSchema);

module.exports = itemModel;
