// server.js

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

// Define the port to listen on using the PORT environment variable
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
