const eventService = require("../services/eventService");
const validation = require("../validators/eventValidation");
const Event = require('../models/event')

// Register new organiser:-
const createEvent = async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validation.validateNewEvent(req.body);
    if (error)
      return res
        .status(400)
        .json({ status: false, message: error.details[0].message });
    let {
      name,
      email,
      contactNumber,
      hostedBy,
      sponsersName,
      category,
      type,
      cost,
      isVolunteersNeed,
      startTime,
      endTime,
      location,
      date,
      description,
    } = req.body;
    name = name.toLowerCase().trim();
    email = email.toLowerCase().trim();
    hostedBy = hostedBy.toLowerCase().trim();
    sponsersName = sponsersName.toLowerCase().trim();
    location = location.toLowerCase();
    category = category.toLowerCase();
    description = description.toLowerCase();
    const eventData = {
      name,
      email,
      contactNumber,
      hostedBy,
      sponsersName,
      category,
      type,
      cost,
      isVolunteersNeed,
      startTime,
      endTime,
      location,
      date,
      description,
    };
    const eventInfo = await eventService.createNewEvent(eventData);
    return res.status(201).json({
      status: true,
      message: "Event created successfully",
      data: eventInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

// Get all events by category :-
const getAllEventsByCategory = async (req, res) => {
  const category = req.query.category;
  const findCategory = await eventService.getEventsByCategory(category);
  if (!findCategory.length)
    return res.status(404).json({
      status: false,
      message: `No event found in this ${category} category`,
    });
  return res.status(200).json({
    status: true,
    message: "Events fetched successfully",
    data: findCategory,
  });
};

const getProductById = async (req, res) => {
  try {
      const id = req.params.id;
      const result = await Event.findById(id);
      res.status(200)
          .json({ message: "success", data: result });
  } catch (err) {
      res.status(500)
          .json({ message: "Internal server error" });
  }
}


// Get all events :-
const getAllEvents = async (req, res) => {
  const findEvent = await eventService.getEvents();
  if (!findEvent.length)
    return res.status(404).json({
      status: false,
      message: "No event found",
    });
  return res.status(200).json({
    status: true,
    message: "Events fetched successfully",
    data: findEvent,
  });
};

module.exports = { createEvent, getAllEventsByCategory, getAllEvents, getProductById };
