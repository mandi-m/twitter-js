//will be our main application
const express = require('express');
const app = express();  //creates an instance of the express application, developers chose to use factory function method instead of new keyword

app.get('/', function (request, response, next){
  response.send('<h3>Welcome to Mandi and Madeleine\'s Page</h3>');
})

app.listen(3000, function(){
  console.log('Hello, listening for requests on port 3000');
});

