// server.js

const express = require('express');
const app = express();

// Define the port to listen on (set it explicitly to 3000)
const port = 3000; // Set the port to 3000

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
