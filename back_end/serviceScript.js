require('dotenv').config();

const databaseConnection = require('./app/db');
const serviceData = require('./app/data/serviceInfo');
const Service = require('./app/models/service');

databaseConnection();

const importData = async () => {
    try {
        await Service.deleteMany({});

        await Service.insertMany(serviceData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
}

importData();