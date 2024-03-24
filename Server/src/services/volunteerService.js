const Volunteer = require("../models/volunteer");

const addVolunteer = async (volunteer) => {
  return await Volunteer.create(volunteer);
};

module.exports = { addVolunteer };
