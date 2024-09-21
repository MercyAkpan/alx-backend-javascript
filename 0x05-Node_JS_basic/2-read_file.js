/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable guard-for-in */
const fs = require('fs');
const path = require('path');

// Function to read the CSV and count students by field
function countStudents(path_name) {
  // Construct the path to the CSV file
  const filePath = path.join(__dirname, path_name); // Use path_name directly

  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line);

    // Get the header and student data
    const header = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(','));

    // Total number of students
    const totalStudents = students.length;

    // Initialize a field count object
    const fieldCount = {};

    // Loop through the student data
    students.forEach(student => {
      const field = student[3]; // Field is the fourth column
      const firstName = student[0]; // First name is the first column

      // Initialize the field count if it doesn't exist
      if (!fieldCount[field]) {
        fieldCount[field] = { count: 0, names: [] };
      }

      // Increment the count and add the first name
      fieldCount[field].count += 1;
      fieldCount[field].names.push(firstName);
    });

    // Output total number of students
    process.stdout.write(`Number of students: ${totalStudents}\n`);

    // Output the results for each field
    for (const field in fieldCount) {
      const { count, names } = fieldCount[field];
      process.stdout.write(`Number of students in ${field}: ${count}. List: ${names.join(', ')}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database'); // Throw a custom error
  }
}

// Export the function
module.exports = countStudents;
