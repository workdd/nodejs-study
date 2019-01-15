const fs = require('fs');

const readStream =fs.createReadStream('./writeme2.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');

readStream.pipe(writeStream);