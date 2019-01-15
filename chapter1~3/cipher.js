const crypto = require('crypto');
//암호화
const cipher = crypto.createCipher('aes-256-cbc','key');
let result = cipher.update('암호','utf8','base64');
result += cipher.final('base64');
console.log('암호화:',result);

//복호화
const decipher = crypto.createDecipher('aes-256-cbc','key');
let result2 = decipher.update(result,'base64','utf8');
result2+= decipher.final('utf8');
console.log('복호화:',result2);