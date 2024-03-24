const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    hostedBy: { type: String, required: true },
    sponsersName: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ["online", "offline"], required: true },
    cost: {
      type: String,
      enum: ["free", "ticketsAvailable", "ticketsNotAvailable"],
      required: true,
    },
    isVolunteersNeed: { type: Boolean, required: true },
    startTime: { type: Number },
    endTime: { type: Number },
    location: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema, "Event");
