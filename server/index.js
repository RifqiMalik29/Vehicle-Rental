const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.URL;

const routers = require("./src/routers");
const adminRouter = require("./src/routers/admin");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/rental/v1", routers);
app.use("/api/rental/admin/v1", adminRouter);

app.use(express.static("public/uploads"));

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
