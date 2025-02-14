import mongoose from 'mongoose'
import logger from '../utils/logger.js'
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

export const closeDB = async () => {
  try {
    await mongoose.connection.close()
    logger.info('DB Connection Closed')
  } catch (err) {
    logger.error('Error closing the DB connection:', err.message)
    process.exit(1)
  }
}