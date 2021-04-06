const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  itemId: String,
  userId: String,
  itemName: { type: String, required: true },
  orderDate: { type: Date, default: new Date() },
  itemPrice: { type: String, required: true },
  status: String,
});

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
