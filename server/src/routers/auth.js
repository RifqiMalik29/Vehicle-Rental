const authCont = require("../controllers/auth");
const router = require("express").Router();

router
  .post("/register", authCont.register)
  .post("/login", authCont.login)
  .patch("/forgot", authCont.forgotPassword);

module.exports = router;
