const fs = require('fs');
fs.readFile('input.txt' , 'utf-8' , (err,data) => {
    if(err) {
        console.log("File Reading Error!");
    }
    else {
        console.log(data);
    }
});
fs.writeFile('output.txt' , 'Hello' , (err) => {
    if(err) {
        console.log("File Reading Error!");
        return;
    }
});
fs.appendFile('output.txt' , ' World' , (err) => {
    if(err) {
        console.log("File Reading Error!");
        return;
    }
});
fs.unlink('output.txt' , (err) => {
    if(err) {
        console.log("File Reading Error!");
        console.log(err);
        return;
    }
    else {
        console.log("Deleted");
    }
});