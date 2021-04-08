const authCont = require("../controllers/auth");
const router = require("express").Router();
const {
  requiredName,
  requiredEmail,
  requiredPassword,
} = require("../middlewares/validators");

router
  .post(
    "/register",
    [requiredName, requiredEmail, requiredPassword],
    authCont.register
  )
  .post("/login", authCont.login)
  .patch("/forgot", authCont.forgotPassword);

module.exports = router;
