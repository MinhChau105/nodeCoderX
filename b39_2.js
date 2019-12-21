const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log('https://jsonplaceholder.typicode.com/todos/1');
  })

 axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log('https://jsonplaceholder.typicode.com/todos/2');
  })




