import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5001;

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/rbr-db';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});