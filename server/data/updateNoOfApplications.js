import mongoose from 'mongoose'

const DATABASE_URL = process.env.DB_URI;
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error:', err))
