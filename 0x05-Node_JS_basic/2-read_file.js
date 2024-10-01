const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf-8');
        
        // Split data into lines and filter out empty ones
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // Check if the CSV contains data
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Parse the CSV header and data rows
        const header = lines[0].split(',');  // Get the header row
        const students = lines.slice(1).map(line => line.split(','));

        // Total number of students
        console.log(`Number of students: ${students.length}`);

        // Group students by their field
        const fields = {};
        for (const student of students) {
            const field = student[3];  // Assuming the field is the 4th column
            const firstName = student[0];  // Assuming first name is the 1st column
            
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        }

        // Log the number of students in each field
        for (const [field, firstNames] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }
    } catch (error) {
        // Handle any error (including file not found)
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;

