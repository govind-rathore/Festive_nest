const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllrers/user");

router.post("/createUser", registerUser);
router.post("/loginUser", loginUser);

module.exports = router;
