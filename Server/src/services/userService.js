const User = require("../models/user");

// Check if the email already exists
const isExistingEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error("Error checking if email exists:", error);
    throw error;
  }
};

// Create a new user
const createNewUser = async (data) => {
  try {
    return await User.create(data);
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
};

module.exports = { isExistingEmail, createNewUser };
