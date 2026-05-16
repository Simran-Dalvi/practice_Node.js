const fs = require('fs');

// console.log("KG Coding is the best.");

fs.writeFile("output.txt", "Writing File", (err)=>{
    if (err) console.log("Error occured");
    else console.log("File Wriiten Successfully");
});