const express = require("express");
const router = express.Router();

const { applyVolunteer } = require("../controllrers/volunteer");

router.post("/applyVolunteer/:eventId", applyVolunteer);

module.exports = router;
