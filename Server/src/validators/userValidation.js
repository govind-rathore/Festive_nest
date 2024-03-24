const Joi = require("joi");

const validateNewUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).trim().required(),
    email: Joi.string().min(1).max(255).email().trim().required(),
    password: Joi.string().min(8).max(255).required(),
    role: Joi.string().valid("user", "guest").default("user"),
  });
  return schema.validate(user);
};

const validateLoginUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(1).max(255).email().required(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
};

module.exports = { validateNewUser, validateLoginUser };
