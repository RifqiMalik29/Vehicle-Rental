const authRouter = require("./auth");
const vehicleRouter = require("./vehicle");

const router = require("express").Router();

router.use("/auth", authRouter).use("/vehicle", vehicleRouter);

module.exports = router;
