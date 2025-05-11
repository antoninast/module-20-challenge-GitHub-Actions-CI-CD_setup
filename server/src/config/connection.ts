// import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz');

// export default mongoose.connection;
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with failure
  });

export default mongoose.connection;
