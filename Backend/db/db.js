const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to DB');
    } catch (err) {
        console.error('Error connecting to DB:', err);
    }
};

module.exports = connectToDB;
