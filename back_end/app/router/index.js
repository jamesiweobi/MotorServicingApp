const router = require('express').Router();
const { createNewUser } = require('../controller');

router.post('/signup', createNewUser);

module.exports = {
  router,
};
