'use strict';

//will be our main application
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();  //creates an instance of the express application, developers chose to use factory function method instead of new keyword
const nunjucksMod = require('nunjucks');
const tweetBankMod = require('./tweetBank');
const routes = require('./routes');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});


//can combine the lines
//const app = require('express')();

app.use('/', routes);

app.listen(3000, function(){
  console.log('Hello, listening for requests on port 3000');
});

// madeliene's change comment
