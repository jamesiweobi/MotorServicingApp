const Service = require('../models/servicesModel');
const AppError = require('../helpers/');

exports.getAllServices = async (req, res, next) => {
    try {
        const services = await Service.find({});

        res.json(services);
    } catch (error) {
        console.error(error);
        next(new AppError('Server Error', 500))
    }
}

exports.getServiceById = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);

        res.json(service);
    } catch (error) {
        console.error(error);
        next(new AppError('Server Error', 500))
    }
}
