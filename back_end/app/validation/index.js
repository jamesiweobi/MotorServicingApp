// const { userSchema } = require('../models');
const Joi = require('@hapi/joi');

const signupValidation = (newUser) => {
  const userSchema = Joi.object({
    firstName: Joi.string().alphanum().max(250).required(),
    lastName: Joi.string().alphanum().max(250).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .min(6)
      .max(1024)
      .required(),
    repeatPassword: Joi.ref('password'),
  });

  return userSchema.validate(newUser);
};

module.exports = {
  signupValidation,
};
