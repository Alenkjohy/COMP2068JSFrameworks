require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/categories', require('./routes/categories'));

// Serve static files from the 'public' folder (built React app)
app.use(express.static(path.join(__dirname, 'public')));

// For any route not matching /api, serve index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// models/Category.js is already defined
const Category = require('./models/Category');

// Seed default categories if none exist
async function seedCategories() {
  const count = await Category.countDocuments();
  if (count === 0) {
    const defaultCategories = [
      { name: 'Dessert' },
      { name: 'Main Course' },
      { name: 'Appetizer' },
      { name: 'Beverage' }
    ];
    await Category.insertMany(defaultCategories);
    console.log('Default categories added');
  }
}

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedCategories();   // add this line
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));