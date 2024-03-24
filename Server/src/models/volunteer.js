const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const volunteerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    eventId: { type: ObjectId, required: true },
    dob: { type: Date, required: true },
    city: { type: String, required: false },
    email: { type: String, required: true },
    state: { type: String, required: false },
    gender: { type: String, enum: ["male", "female", "other"] },
    pincode: { type: String, required: false },
    address: { type: String, required: false },
    nationality: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    recoveryEmail: { type: String, required: false },
    alternatePhoneNumber: { type: String, required: false },
    previousExperience: { type: String, required: false },
    qualification: { type: String, required: false },
    dayOfWeek: {
      type: String,
      enum: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
    },
    timeOfDay: {
      type: String,
      enum: ["morning", "afternoon", "evening", "night"],
    },
    medicalCondition: {
      type: String,
      enum: [
        "excellent",
        "good",
        "fair",
        "poor",
        "excellent with some limitations",
        "good with occasional limitations",
        "fair with frequent limitations",
        "poor with significant limitations",
      ],
    },
    englishLevel: {
      type: String,
      enum: ["high", "medium", "low", "intermediate"],
    },
    hearOpportunity: {
      type: String,
      enum: ["social media", "from a friend", "from the website", "other"],
    },
    availabilityHours: {
      type: String,
      enum: [
        "1 hour",
        "2 hours",
        "3 hours",
        "4 hours",
        "5 hours",
        "6 hours",
        "7 hours",
        "8 hours",
        "9 hours",
        "10 hours",
        "11 hours",
        "12 hours",
        "more than 12 hours",
      ],
    },
    motivates: {
      type: String,
      enum: [
        "desire for new experience",
        "desire to contribute to the community",
        "opportunity for learning and growth",
        "passion for the cause",
        "desire to connect with like-minded individuals",
      ],
    },
    isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema, "Volunteer");
