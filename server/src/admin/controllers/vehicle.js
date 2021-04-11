const vehicleModel = require("../../models/vehicle");
const { response } = require("../../helpers/response");
const mongoose = require("mongoose");

module.exports = {
  getAllVehicles: async (req, res) => {
    try {
      const result = await vehicleModel.find();
      response(res, 200, result);
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  getVehicleById: async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await vehicleModel.findById({ _id });
      response(res, 200, result);
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  addVehicleList: async (req, res) => {
    try {
      const setData = req.body;
      const photoField = req.file.filename;
      const userId = req.token._id;

      if (req.file) {
        setData.photo = photoField;
      }

      const newData = {
        ...setData,
        userId: userId,
      };

      const addVehicle = new vehicleModel(newData);
      const result = await addVehicle.save();
      response(res, 201, { message: "Vehicle added", data: result });
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  updateVehicle: async (req, res) => {
    try {
      const setData = req.body;
      const { _id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send({ message: `No vehicle with id : ${_id}` });

      const updatedVehicle = setData;
      const result = await vehicleModel.findByIdAndUpdate(_id, updatedVehicle, {
        new: true,
      });
      response(res, 201, { message: "Update Success" });
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  deleteItem: async (req, res) => {
    try {
      const { _id } = req.params;

      const result = await vehicleModel.findByIdAndDelete({ _id });
      if (result == null) {
        return response(res, 404, { message: "ID not found" });
      }
      response(res, 200, { message: "Delete Success", data: result });
    } catch (error) {
      response(res, 500, error.message);
    }
  },
};
