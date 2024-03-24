const User = require("../models/user");

const isExistingEmail = async (email) => {
  return await User.findOne({ email: email });
};

const createNewUser = async (data) => {
  return await User.create(data);
};

module.exports = { isExistingEmail, createNewUser };
