const url = require('url');
const querystring = require('querystring');

const parsedUrl =- url.parse('http://github.com/cjg9040');

const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():',query);