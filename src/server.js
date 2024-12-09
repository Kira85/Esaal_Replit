const express = require('express');
const app = express();

// The port needs to use process.env.PORT for Render
const port = process.env.PORT || 8080;

// Basic middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    console.log('Request received');
    res.send('Hello from Esaal! Server is working!');
});

// Start server - make sure to use 0.0.0.0 for Render
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});

// Error handling
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
