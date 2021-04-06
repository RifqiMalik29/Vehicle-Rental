const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  dateOfBirth: String,
  deliveryAddress: String,
  photo: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
