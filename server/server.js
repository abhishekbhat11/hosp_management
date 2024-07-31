const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://abhishek:abhishek%401234@navisto.cloud/?authMechanism=DEFAULT&authSource=hospitalmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

// API endpoint for handling user registration
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error authenticating user' });
  }
};

// Apply the authentication middleware to the relevant routes

// Example route for Online Pharmacy
app.get('/api/online-pharmacy', isAuthenticated, (req, res) => {
  // Return data for the Online Pharmacy tab
  res.json({ success: true, message: 'Access to Online Pharmacy granted', user: req.user });
});

// Example route for Book Appointment
app.get('/api/book-appointment', isAuthenticated, (req, res) => {
  // Return data for the Book Appointment tab
  res.json({ success: true, message: 'Access to Book Appointment granted', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
