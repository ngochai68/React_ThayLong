const mongoose = require('mongoose');

const dbConfig = {
  mongodb_uri: 'mongodb://127.0.0.1:27017/laptop_react'
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbConfig.mongodb_uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToDatabase;
