import mongoose from 'mongoose';
import EmployeeModel from '../models/employee';

const mongoURI = 'mongodb://localhost:27017/rbr-db';

const initDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');

    const employees = [
      { name: 'John Doe', title: 'Software Engineer', department: 'Engineering' },
      { name: 'Jane Smith', title: 'Product Manager', department: 'Product' },
      { name: 'Alice Johnson', title: 'Designer', department: 'Design' },
    ];

    await EmployeeModel.deleteMany({});
    await EmployeeModel.insertMany(employees);
    console.log('Employees inserted');

    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

initDB();
