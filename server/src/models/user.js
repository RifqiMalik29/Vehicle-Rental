const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: String,
  dateOfBirth: String,
  deliveryAddress: String,
  photo: String,
  role: { type: Number, default: 5 },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
