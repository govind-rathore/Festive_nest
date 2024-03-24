const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./src/routes/index");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

mongoose
  .connect(
    "mongodb+srv://rathoregovind2000:fptV5lbEBXkHmdEk@cluster0.bzwder5.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,        
    }
  )
  .then(() => console.log("mongodb running on port 8000"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 8000, function () {
  console.log("Express app running on port " + (process.env.PORT || 8000));
});
