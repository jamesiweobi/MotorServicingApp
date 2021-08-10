const router = require('express').Router();
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require('../controller');

router.get('/', (req, res) => {
  res.send('welcome to our Motor Servicing App');
});
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

module.exports = {
  router,
};
