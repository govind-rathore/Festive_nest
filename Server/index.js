const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./src/routes/index");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Log environment variables
console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);

const app = express();
app.use(cors(
  {
  origin: ["https://deploy-mern-1whq.vercel.app"],
  methods: ["POST","GET"],
  Credential: true
}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 8000, function () {
  console.log("Express app running on port " + (process.env.PORT || 8000));
});
