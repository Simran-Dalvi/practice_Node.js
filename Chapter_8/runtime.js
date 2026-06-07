const runtime  = () => {
    // Reference Error (x is not defined)
    console.log(x);

    // Type error (num is not a function)
    let num = 10;
    num();

    // Invalid Json parse (Syntax Error)
    let jsonString = {name : 'john'} //Invalid JSON (single quotes)
    JSON.parse(jsonString);

    // File not found error (fs module)
    const fs = require('fs');
    fs.readFileSync('nonexistentFile.txt'); //Throws error: ENOENT (file not found)
}

module.exports = runtime;