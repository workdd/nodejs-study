const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha256').update('password').digest('base64'));