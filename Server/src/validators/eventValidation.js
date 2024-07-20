const Joi = require("joi");

const validateNewEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).trim().required(),
    email: Joi.string().min(1).max(255).email().trim().required(),
    contactNumber: Joi.string()
      .regex(/^(?=.*[0-9])\d*$/)
      .empty("")
      .optional()
      .length(10)
      .messages({
        "string.pattern.base":
          "Please enter a valid contact number using only numeric characters.",
        "string.length": "Contact number should be 10 digit",
      }),
    hostedBy: Joi.string().min(3).max(255).trim().required(),
    sponsersName: Joi.string().min(3).max(255).trim().required(),
    category: Joi.string().min(3).max(255).trim().required(),
    type: Joi.string().valid("online", "offline"),
    cost: Joi.string().valid("free", "ticketsAvailable", "ticketsNotAvailable"),
    isVolunteersNeed: Joi.boolean().required(),
    startTime: Joi.number().required(),
    endTime: Joi.number().required(),
    location: Joi.string().min(3).max(255).trim().required(),
    date: Joi.date()
      .min(new Date())
      .required()
      .messages({ "date.min": "Schedule date can not be past date/time" }),
    description: Joi.string().min(3).trim().optional().messages({
      "string.min": "Description should be minimum 3 characters long",
      "string.max": "Description should be maximum 100 characters long",
    }),
  });
  return schema.validate(event);
};

module.exports = { validateNewEvent };
