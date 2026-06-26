const fs = require('fs');
fs.readFile('input.txt' , 'utf-8' , (err,data) => {
    if(err) {
        console.log("File Reading Error!");
    }
    else {
        console.log(data);
    }
});