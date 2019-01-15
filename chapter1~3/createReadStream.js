const fs = require('fs');

fs.writeFile('./readme.txt','저는 조금씩 조금씩 나눠서 전달됩니다.',(err)=>{
    if(err){
        throw err;
    }
})

const readStream = fs.createReadStream('./readme.txt',{highWaterMark:16});
const data = [];

readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data:',chunk,chunk.length);
})

readStream.on('end',()=>{
    console.log('end:',Buffer.concat(data).toString());
});


readStream.on('error',(err)=>{
    console.log('error:',err);
})