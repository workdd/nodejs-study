const url =require('url');

const URL = url.URL;

const myURL = new URL('http://www.github.com/cjg9040');

console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));
