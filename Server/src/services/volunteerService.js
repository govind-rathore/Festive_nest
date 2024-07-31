const Volunteer = require("../models/volunteer");

// Add a new volunteer
const addVolunteer = async (volunteer) => {
  try {
    return await Volunteer.create(volunteer);
  } catch (error) {
    console.error("Error adding volunteer:", error);
    throw error;
  }
};

module.exports = { addVolunteer };
