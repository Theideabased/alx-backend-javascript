const readDatabase = require('../utils');

class StudentsController {
  // Method to get all students and group by fields
  static getAllStudents(req, res) {
    const database = process.argv[2]; // Retrieve the database file path dynamically

    if (!database) {
      res.status(500).send('Database file is not provided');
      return;
    }

    readDatabase(database)
      .then((students) => {
        let responseText = 'This is the list of our students\n';

        // Sort fields alphabetically (case insensitive)
        const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        // Append each field and its corresponding list of first names
        fields.forEach((field) => {
          const studentNames = students[field].join(', ');
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${studentNames}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  // Method to get all students by major (CS or SWE)
  static getAllStudentsByMajor(req, res) {
    const database = process.argv[2]; // Retrieve the database file path dynamically
    const major = req.params.major; // Major parameter passed by the user (CS or SWE)

    if (!database) {
      res.status(500).send('Database file is not provided');
      return;
    }

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((students) => {
        const studentNames = students[major] ? students[major].join(', ') : '';
        res.status(200).send(`List: ${studentNames}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
