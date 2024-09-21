const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cart');
const { secureHeaders, enableCors } = require('./middleware/security');

const app = express();
app.use(express.json());  // For parsing JSON requests

// Security Middleware
secureHeaders(app);  // Apply Helmet for secure HTTP headers
enableCors(app);     // Enable CORS

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cartdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/customer', cartRoutes);

// Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
