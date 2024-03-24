const volunteerService = require("../services/volunteerService");

// Apply new volunteer:-
const applyVolunteer = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    let volunteerData = req.body;
    volunteerData.eventId = eventId;
    const volunteerInfo = await volunteerService.addVolunteer(volunteerData);
    return res.status(201).json({
      status: true,
      message: "volunteer applied successfully",
      data: volunteerInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { applyVolunteer };
