const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbName = process.env.DB_NAME || 'learn_bridge';
const uri = process.env.MONGODB_URI || process.env.MONGO_URI || `mongodb://localhost:27017/${dbName}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDB() {
  try {
    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
