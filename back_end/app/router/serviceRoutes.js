const express = require('express');
const router = express.Router();

const {getAllServices, getServiceById} = require('../controller/serviceController');

router.route('/').get(getAllServices);

router.route('/:id').get(getServiceById);

module.exports = router;