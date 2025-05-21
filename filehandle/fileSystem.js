const fs = require('fs');

// Create 
fs.writeFileSync('test.txt', 'This is a test file');

// Read 
const data = fs.readFileSync('test.txt', 'utf-8');
console.log('File content:', data);
