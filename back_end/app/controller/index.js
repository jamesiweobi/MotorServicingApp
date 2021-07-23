const { signupValidation, loginValidation } = require('../validation');
const User = require('../models');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  try {
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
  } catch (error) {
    throw error;
  }
};

const login = async (req, res) => {
  const { error } = await loginValidation(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(200).json({ message: 'Email or Password wrong' });
  }
  try {
    const invalidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!invalidPassword) {
      res.status(400).json({ message: 'Email or Password wrong' });
    }
    res.status(200).json({ message: 'logged in!' });
  } catch (error) {
    throw error;
  }
};

module.exports = { signup, login };
