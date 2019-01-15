const crypto = require('crypto');

crypto.randomBytes(64,(err,buf)=>{
    const salt = buf.toString('base64');
    console.log('salt:',salt);
    crypto.pbkdf2('123',salt,100,64,'sha512',(err,key)=>{
        console.log('비밀번호:',key.toString('base64'));
    })
})