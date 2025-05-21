const fs = require('fs');

// 1. Write 
fs.writeFileSync('sync.txt', 'This is sync write.');
console.log(' File written (sync)');

// 2. Append
fs.appendFileSync('sync.txt', '\nThis is sync append.');
console.log(' Data appended (sync)');

// 3. Read 
const data = fs.readFileSync('sync.txt', 'utf8');
console.log(' File content (sync):\n', data);

// 4. Rename
fs.renameSync('sync.txt', 'sync_renamed.txt');
console.log(' File renamed (sync)');

// 5. Delete
fs.unlinkSync('sync_renamed.txt');
console.log(' File deleted (sync)');

// 6. Create
fs.mkdirSync('syncFolder');
console.log('Folder created (sync)');

// 7. Remove
fs.rmdirSync('syncFolder');
console.log(' Folder removed (sync)');

// 8. Handle JSON
const user = { name: "SyncUser", age: 30 };
fs.writeFileSync('syncUser.json', JSON.stringify(user, null, 2));
const userData = fs.readFileSync('syncUser.json', 'utf8');
const userObj = JSON.parse(userData);
console.log(' Read JSON (sync):', userObj.name);
fs.unlinkSync('syncUser.json');
