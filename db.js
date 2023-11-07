// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/Projects', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('**********MongoDB connection successfull******');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
