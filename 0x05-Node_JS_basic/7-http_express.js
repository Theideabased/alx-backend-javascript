const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

// Function to count students asynchronously
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const fieldIndex = {};
      lines.forEach((line, index) => {
        const fields = line.split(',');
        if (index === 0) {
          // Extract header row
          fields.forEach((field, i) => {
            fieldIndex[field.trim()] = i;
          });
        } else {
          const firstname = fields[fieldIndex.firstname];
          const field = fields[fieldIndex.field];
          if (firstname && field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname.trim());
          }
        }
      });

      const totalStudents = Object.values(students).reduce(
        (acc, curr) => acc + curr.length,
        0
      );

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        result += `Number of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

// Route for /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', (req, res) => {
  const database = process.argv[2];

  if (!database) {
    res.status(400).send('Database argument not found');
    return;
  }

  countStudents(database)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;

