const vehicleModel = require("../models/vehicle");
const { response } = require("../helpers/response");

module.exports = {
  getAllVehicles: async (req, res) => {
    try {
      const result = await vehicleModel.find();
      response(res, 200, { total: result.length, result });
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  searchAndFilter: async (req, res) => {
    try {
      const { page, limit, q } = req.query;
      const result = await vehicleModel
        .find({ q })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      response(res, 200, {
        total: result.length,
        totalPage: page.length,
        result,
      });
    } catch (error) {
      response(res, 500, error.message);
    }
  },
};
