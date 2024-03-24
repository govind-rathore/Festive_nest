const Event = require("../models/event");

const createNewEvent = async (event) => {
  return await Event.create(event);
};

const getEventsByCategory = async (category) => {
  return await Event.find({ category: category });
};

const getEvents = async () => {
  return await Event.find();
};

module.exports = { createNewEvent, getEventsByCategory, getEvents };
