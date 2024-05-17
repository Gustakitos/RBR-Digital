import mongoose from 'mongoose';
import Employee from '../models/employee';

const mongoURI = 'mongodb://mongo:27017/rbr-db';

const initDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');

    const employees = [
      { name: 'João', title: 'Software Engineer', department: 'Engenharia' },
      { name: 'Maria', title: 'Product Manager', department: 'Produto' },
      { name: 'José', title: 'Designer', department: 'Design' },
    ];

    await Employee.deleteMany({});
    await Employee.insertMany(employees);
    console.log('Employees inserted');

    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

initDB();
