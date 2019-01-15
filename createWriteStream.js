const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료');
})

writeStream.write('1\n');
writeStream.write('두번째');
writeStream.end();