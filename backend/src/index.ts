import express from 'express';
import mongoose from 'mongoose';
import EmployeeRouter from './routes/EmployeeRoute';
const app = express();
const port = 5001;

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/rbr-db';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/employee', EmployeeRouter);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});