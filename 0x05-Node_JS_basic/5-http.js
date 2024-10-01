const http = require('http');
const countStudents = require('./3-read_file_async'); // Import the function

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        // Call the countStudents function and handle the response
        countStudents('database.csv') // Replace with the actual path to your CSV
            .then(() => {
                // The data is logged in the countStudents function
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Check the console for the list of students.\n');
            })
            .catch(err => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Cannot load the database\n');
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;

