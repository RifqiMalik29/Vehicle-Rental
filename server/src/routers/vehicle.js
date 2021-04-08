const vehicleController = require("../controllers/vehicle");
const router = require("express").Router();

router
  .get("/query", vehicleController.searchAndFilter)
  .get("/", vehicleController.getAllVehicles);

module.exports = router;
