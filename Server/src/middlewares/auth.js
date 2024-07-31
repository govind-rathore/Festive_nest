const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { isExistingEmail } = require("../services/userService");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const comparePassword = async (userPassword, password) => {
  return await bcrypt.compare(userPassword, password);
};

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(404);
  }
  if (!token) {
    return res
      .status(404)
      .json({ status: false, message: "No auth token found" });
  }
  console.log(token, "token");
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "There is some internal error to verify user",
      });
    }
    req.user = user;
    const userDetails = await isExistingEmail(user.email);
    if (userDetails) {
      req.user._id = userDetails._id;
      req.user.name = userDetails?.name || null;
      req.user.role = userDetails?.role || null;
    }
    next();
  });
};

module.exports = { hashedPassword, generateToken, comparePassword, verifyUser };
