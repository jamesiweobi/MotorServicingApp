const { signupValidation } = require('../validation');
const User = require('../models');
const bcrypt = require('bcryptjs');

const createNewUser = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const { error } = signupValidation(req.body);
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
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
      user: newUser,
    });
  }
};

module.exports = { createNewUser };
