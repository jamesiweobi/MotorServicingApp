const { signupValidation } = require('../validation');
const User = require('../models');

const createNewUser = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const { error, value } = signupValidation(req.body);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  if (error) {
    return res.status(400).json({
      error: 'Failed to create new User',
      message: error.details[0].message,
    });
  } else {
    await newUser.save();
    return res.status(400).json({
      message: 'Created new User',
      user: value,
    });
  }
};

module.exports = { createNewUser };
