const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Database
connectDB();

// Initialize the Express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
// Allows our React frontend (on port 5173 or deployed on Vercel) to call this API
app.use(cors({
  origin: '*', // For development, allow all. In production, we can lock this to frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Built-in body parser middleware to parse incoming JSON payloads
app.use(express.json());

// API Healthcheck route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Developer Portfolio API!',
    status: 'online',
    timestamp: new Date()
  });
});

// Register API Routes
app.use('/api/contact', contactRoutes);

// Register Global Error Handling Middleware (must be registered after all routes)
app.use(errorHandler);

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections (e.g. database disconnect issues)
process.on('unhandledRejection', (err, promise) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
  // Gracefully close server & exit process
  server.close(() => process.exit(1));
});
