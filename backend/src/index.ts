import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
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

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use('/employees', EmployeeRouter);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});