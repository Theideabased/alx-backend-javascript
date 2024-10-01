const express = require('express');

const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;

