console.log('Starting server...'); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const express = require('express');
console.log('Express loaded'); 
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  console.log('Received request on root endpoint');
  res.json({ message: 'Welcome to Esaal Backend API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server with more explicit logging
app.listen(port, () => {
  console.log('=================================');
  console.log(`Server is running on port ${port}`);
  console.log('=================================');
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
