const vehicleAdmin = require("../../admin/controllers/vehicle");
const router = require("express").Router();
const upload = require("../../middlewares/multer");

router
  .get("/", vehicleAdmin.getAllVehicles)
  .get("/:_id", vehicleAdmin.getVehicleById)
  .post("/", upload, vehicleAdmin.addVehicleList)
  .patch("/update/:_id", vehicleAdmin.updateVehicle)
  .delete("/delete/:_id", vehicleAdmin.deleteItem);

module.exports = router;
