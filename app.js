//will be our main application
const express = require('express');
const app = express();  //creates an instance of the express application, developers chose to use factory function method instead of new keyword
const nunjucksMod = require('nunjucks');
const nunjucks = nunjucksMod();

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});



//can combine the lines
//const app = require('express')();
app.use('/', function(request, response, next) {
  console.log('HTTP verb: ' + request.method + ' route: ' + request.originalUrl);
  next();
});

app.use('/special', function(request, response, next) {
  console.log('Reached special');
  next();
});

app.use('/', function (request, response, next){
  // console.log(request.params.pupID);
  console.log(request.method);
  response.send('<h3>Welcome to Mandi and Madeleine\'s New Page</h3>');
});

app.listen(3000, function(){
  console.log('Hello, listening for requests on port 3000');
});

// madeliene's change comment
