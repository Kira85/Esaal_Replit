console.log('Starting server...');  // Debug line

const express = require('express');
const app = express();

console.log('Express loaded');  // Debug line

const port = 8080;

app.get('/', (req, res) => {
    console.log('Got a request');  // Debug line
    res.send('Hello from Esaal!');
});

const server = app.listen(port, () => {
    console.log(`Server is definitely running on port ${port}`);
});

// Error handling
server.on('error', (error) => {
    console.error('Server error:', error);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});
