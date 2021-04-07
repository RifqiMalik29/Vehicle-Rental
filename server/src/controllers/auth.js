const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { response } = require("../helpers/response");
require("dotenv").config();

module.exports = {
  login: async (req, res) => {
    try {
      const setData = req.body;
      const { email } = setData;
      const result = await userModel.findOne({ email });

      if (!result) {
        response(res, 404, { message: "Email not found" });
      } else {
        const compare = bcrypt.compareSync(setData.password, result.password);

        if (!compare) {
          response(res, 400, { message: "Invalid Credentials" });
        } else {
          const {
            fullname,
            email,
            phone,
            dateOfBirth,
            deliveryAddress,
            photo,
          } = result;
          const token = jwt.sign(
            {
              fullname,
              email,
              phone,
              dateOfBirth,
              deliveryAddress,
              photo,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
          );
          response(res, 200, { message: "Login Success", token });
        }
      }
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  register: async (req, res) => {
    try {
      const errors = validationResult(req).array();

      if (errors.length) {
        response(res, 400, { message: errors });
      } else {
        const setData = req.body;
        const { email } = setData;
        const checkUser = await userModel.findOne({ email });

        if (checkUser) {
          return res.status(400).send({ message: "Email already exist!" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(setData.password, salt);
        const newData = { ...setData, password: hash };

        const register = new userModel(newData);
        const result = await register.save();
        res.status(201).send({ message: "Register Success" });
      }
    } catch (error) {
      response(res, 500, error.message);
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const setData = req.body;
      const { email } = setData;

      const checkEmail = await userModel.find({ email });
      const { _id } = checkEmail[0];

      if (checkEmail) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(setData.password, salt);
        setData.password = hash;

        const result = await userModel.findByIdAndUpdate(_id, setData);
        if (result) {
          const result = await userModel.findById({ _id });
          res.status(201).send({ message: `Password is reset successfully` });
        }
      } else {
        response(res, 400, { message: "No email found" });
      }
    } catch (error) {
      response(res, 500, error.message);
    }
  },
};
