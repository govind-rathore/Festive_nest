const Joi = require("joi");

// Validate new event
const validateNewEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).trim().required(),
    email: Joi.string().email().trim().required(),
    contactNumber: Joi.string()
      .regex(/^\d{10}$/)
      .optional()
      .messages({
        "string.pattern.base": "Contact number must be exactly 10 digits long.",
      }),
    hostedBy: Joi.string().min(3).max(255).trim().required(),
    sponsersName: Joi.string().min(3).max(255).trim().required(),
    category: Joi.string().min(3).max(255).trim().required(),
    type: Joi.string().valid("online", "offline"),
    cost: Joi.string().valid("free", "ticketsAvailable", "ticketsNotAvailable"),
    isVolunteersNeed: Joi.boolean().required(),
    startTime: Joi.number().integer().min(0).required(), // Assuming startTime and endTime are timestamps
    endTime: Joi.number().integer().min(0).required(),
    location: Joi.string().min(3).max(255).trim().required(),
    date: Joi.date()
      .min('now')
      .required()
      .messages({ "date.min": "Schedule date cannot be in the past." }),
    description: Joi.string().min(3).max(100).trim().optional().messages({
      "string.min": "Description should be at least 3 characters long.",
      "string.max": "Description should be no more than 100 characters long.",
    }),
  });

  return schema.validate(event, { abortEarly: false }); // Collect all errors and not stop at the first one
};

module.exports = { validateNewEvent };
