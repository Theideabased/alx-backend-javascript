const fs = require('fs');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise with an error if the file can't be accessed
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

      // Resolve the promise with the object of arrays of first names grouped by fields
      resolve(students);
    });
  });
};

module.exports = readDatabase;

