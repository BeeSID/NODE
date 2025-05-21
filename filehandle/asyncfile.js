// const fs = require('fs');

// // 1. Write 
// fs.writeFile('async.txt', 'This is async write.', (err) => {
//     if (err) throw err;
//     console.log('File written (async)');

//     // 2. Append 
//     fs.appendFile('async.txt', '\nThis is async append.', (err) => {
//         if (err) throw err;
//         console.log(' Data appended (async)');

//         // 3. Read
//         fs.readFile('async.txt', 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log(' File content (async):\n', data);

//             // 4. Rename
//             fs.rename('async.txt', 'async_renamed.txt', (err) => {
//                 if (err) throw err;
//                 console.log(' File renamed (async)');

//                 // 5. Delete
//                 fs.unlink('async_renamed.txt', (err) => {
//                     if (err) throw err;
//                     console.log(' File deleted (async)');

//                     // 6. Create
//                     fs.mkdir('asyncFolder', (err) => {
//                         if (err) throw err;
//                         console.log(' Folder created (async)');

//                         // 7. Remove
//                         fs.rmdir('asyncFolder', (err) => {
//                             if (err) throw err;
//                             console.log(' Folder removed (async)');

//                             // 8. JSON
//                             const user = { name: "AsyncUser", age: 28 };
//                             fs.writeFile('asyncUser.json', JSON.stringify(user, null, 2), (err) => {
//                                 if (err) throw err;
//                                 fs.readFile('asyncUser.json', 'utf8', (err, jsonData) => {
//                                     if (err) throw err;
//                                     const userObj = JSON.parse(jsonData);
//                                     console.log('Read JSON (async):', userObj.name);
//                                     fs.unlink('asyncUser.json', () => {});
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });



// Using Async await Modern 
const fs = require('fs').promises;

async function handleFiles() {
  try {
    // 1. Write 
    await fs.writeFile('promise.txt', 'This is promise-based write.');
    console.log('File written (promise)');

    // 2. Append
    await fs.appendFile('promise.txt', '\nAppended using async/await.');
    console.log('Data appended (promise)');

    // 3. Read 
    const data = await fs.readFile('promise.txt', 'utf8');
    console.log('File content (promise):\n', data);

    // 4. Rename 
    await fs.rename('promise.txt', 'renamed_promise.txt');
    console.log('File renamed (promise)');

    // 5. Delete 
    await fs.unlink('renamed_promise.txt');
    console.log('File deleted (promise)');

    // 6. Create 
    await fs.mkdir('promiseFolder');
    console.log('Folder created (promise)');

    // 7. Remove 
    await fs.rmdir('promiseFolder');
    console.log('Folder removed (promise)');

    // 8. Handle JSON file
    const user = { name: 'PromiseUser', age: 40 };
    await fs.writeFile('promiseUser.json', JSON.stringify(user, null, 2));
    const jsonData = await fs.readFile('promiseUser.json', 'utf8');
    const parsedUser = JSON.parse(jsonData);
    console.log('Read JSON (promise):', parsedUser.name);
    await fs.unlink('promiseUser.json');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

handleFiles();
