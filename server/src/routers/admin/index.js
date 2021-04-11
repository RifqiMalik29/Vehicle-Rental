const router = require("express").Router();
const vehicleRouter = require("./vehicle");

router.use("/vehicle", vehicleRouter);

module.exports = router;
