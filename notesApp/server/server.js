require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const notesRouter = require('./routes/notes');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust as needed
app.use(express.json());

// Routes
app.use('/api/notes', notesRouter);

// Basic health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
