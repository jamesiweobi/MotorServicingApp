const { signupValidation, loginValidation } = require('../validation');
const User = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const dotenv = require('dotenv');
const mailgun = require('mailgun-js');
const AppError = require('../helpers/');
dotenv.config();

const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

const signup = async (req, res, next) => {
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
      let message = error.details[0].message;
      if (message.includes('repeatPassword')) {
        message = 'Confirm-Password must be the same as password';
      }
      return next(new AppError(message, 400));
    }
    const token = await jwt.sign(
      { user_id: newUser._id, email: newUser.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '3h',
      }
    );
    newUser.token = token;
    console.log(newUser);
    await newUser.save();
    return res.status(200).json({
      status: 'success',
      message: 'Created new User',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(new AppError('Fail to create new User', 400));
  }
};

const login = async (req, res, next) => {
  try {
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

    const invalidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!invalidPassword) {
      res.status(400).json({ message: 'Email or Password wrong' });
    }

    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '20min',
      }
    );

    user.token = token;

    res.status(200).json({ message: 'logged in!', token });
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
      if (err || !user) {
        return next(new AppError('User with this email does not exist.', 400));
      }

      const token = jwt.sign(
        { _id: user._id },
        process.env.RESET_PASSWORD_KEY,
        {
          expiresIn: '5h',
        }
      );
      const data = {
        from: 'noreply@thepowerteam.com',
        to: email,
        subject: 'Password reset link',
        html: `<h2>Please click on given link to reset password</h2>
                    <p>${process.env.CLIENT_URI}/resetpassword/${token}</p>`,
      };

      return user.updateOne({ resetLink: token }, function (err, success) {
        if (err) {
          return next(new AppError('Reset password link error.', 400));
        } else {
          mg.messages().send(data, function (error, body) {
            if (error) {
              return next(new AppError('Something went wrong', 400));
            }
            return res.status(200).json({
              message: 'Email has been sent. Kindly follow the instructions',
            });
          });
        }
      });
    });
  } catch (error) {}
};

const resetPassword = (req, res, next) => {
  const { resetLink, newPassword } = req.body;
  if (resetLink) {
    jwt.verify(
      resetLink,
      process.env.RESET_PASSWORD_KEY,
      function (error, decodedData) {
        if (error) {
          return next(new AppError('Incorrect token or it is expired.', 400));
        }
        User.findOne({ resetLink }, (err, user) => {
          if (err || !user) {
            return next(new AppError('Invalid Reset Token', 400));
          }

          //encrypt the reset password
          // encryptedUserPassword = bcrypt.hash(newPassword, 10);

          const obj = {
            password: newPassword,
            resetLink: '',
          };

          user = _.extend(user, obj);
          user.save((err, result) => {
            if (err) {
              return next(new AppError('Reset password error.', 400));
            } else {
              return res
                .status(200)
                .json({ message: 'Password Reset Successful' });
            }
          });
        });
      }
    );
  } else {
    return next(new AppError('Authentication error!!!.', 401));
  }
};

module.exports = { signup, login, forgotPassword, resetPassword };
