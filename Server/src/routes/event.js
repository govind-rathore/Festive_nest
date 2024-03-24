const express = require("express");
const router = express.Router();

const { verifyUser } = require("../middlewares/auth");

const {
  createEvent,
  getAllEventsByCategory,
  getAllEvents,
  getProductById,
} = require("../controllrers/event");

router.post("/createEvent", verifyUser, createEvent);
router.get("/getEventsByCategory", getAllEventsByCategory);
router.get("/getAllEvents", getAllEvents);
router.get('/:id', getProductById);

module.exports = router;
