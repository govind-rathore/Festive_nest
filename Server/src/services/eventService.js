const Event = require("../models/event");

// Create a new event
const createNewEvent = async (event) => {
  try {
    return await Event.create(event);
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

// Get events by category
const getEventsByCategory = async (category) => {
  try {
    return await Event.find({ category });
  } catch (error) {
    console.error("Error fetching events by category:", error);
    throw error;
  }
};

// Get all events
const getEvents = async () => {
  try {
    return await Event.find();
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw error;
  }
};

module.exports = { createNewEvent, getEventsByCategory, getEvents };
