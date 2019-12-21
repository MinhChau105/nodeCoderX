var request = require('request');
console.time('time loaded');
request('https://randomuser.me/api/', function (error, response, body) {
 
});
console.timeEnd('time loaded');