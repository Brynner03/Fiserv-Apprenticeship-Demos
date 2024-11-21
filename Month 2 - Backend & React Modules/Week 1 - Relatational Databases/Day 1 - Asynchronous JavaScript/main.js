// Import the 'readFile' and 'writeFile' functions from 'fs' (file system) with promises support
const { readFile, writeFile } = require('fs').promises;
// Import the 'path' module to handle and transform file paths
const path = require('path');

// Define an asynchronous function 'main' to handle file reading and writing
async function main() {

    // Define an object 'pokemon' with properties 'name' and 'type'
    let pokemon = {
        name: "Pikachu",
        type: "Electric"
    };

    // Initialize an empty array 'dbs' to hold database items
    let dbs = [];
    // Add 'pokemon' object to the 'dbs' array
    dbs.push(pokemon);

    // Uncomment to log 'dbs' array (for debugging)
    // console.log(dbs);

    // Read the 'pokemon.txt' file asynchronously and store its content as a buffer
    const buffer = await readFile(path.join(__dirname, "pokemon.txt"));
    // Parse the buffer (assumed to be JSON format) into a JavaScript object or array
    const db = JSON.parse(buffer);

    // Log the type of 'db' to check if it’s an object or array
    console.log(typeof db); // Should print "object" (arrays are also objects in JavaScript)
    // Log 'db' to see its current contents after reading the file
    console.log(db);

    // Uncomment to log '__dirname' (current directory path) for debugging
    // console.log(__dirname);

    // Add 'pokemon' object to 'db', assuming 'db' is an array (based on structure in file)
    db.push(pokemon);

    // Convert 'db' back to JSON format for saving in the text file
    const preSave = JSON.stringify(db);
    // Write the updated 'db' back to 'pokemon.txt'
    await writeFile(path.join(__dirname, "pokemon.txt"), preSave);

    // Uncomment to log 'db' after saving (for debugging)
    // console.log(db);

}

// Call the 'main' function to execute the asynchronous operations
main();
