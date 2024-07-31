const Joi = require("joi");

// Validate new user registration
const validateNewUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).max(255).required(),
    role: Joi.string().valid("user", "guest").default("user"),
  });

  return schema.validate(user, { abortEarly: false }); // Collect all errors
};

// Validate user login
const validateLoginUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(user, { abortEarly: false }); // Collect all errors
};

module.exports = { validateNewUser, validateLoginUser };
