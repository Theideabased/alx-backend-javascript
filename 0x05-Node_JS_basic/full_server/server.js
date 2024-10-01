const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the routes defined in routes/index.js
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
