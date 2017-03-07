//will define dynamic content
const express = require('express');
const router = express.Router();
const tweetBankMod = require('../tweetBank');
const nunjucks = require('nunjucks');

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });


var locals = {
    title: 'Our New Title',
    tweetArray: tweetBankMod.list()

    //tweetArray = [{name: Emily, content: 'hello'}, {name: Bob, content: 'hi'}]
};

router.use('/', function(request, response, next) {
  console.log('HTTP verb: ' + request.method + ' route: ' + request.originalUrl);
  next();
});

router.get('/', function (req, res) {
  let tweets = tweetBankMod.list();
  console.log('tweets', tweets);
  res.render( 'index', locals, function (err, output){
    if (err) throw err;
  } );
});


router.use('/special', function(request, response, next) {
  console.log('Reached special');
  next();
});

router.use('/', function (request, response, next){
  // console.log(request.params.pupID);
  console.log(request.method);
  console.log('foo', tweetBankMod.foo);
  console.log(tweetBankMod);
  //response.send('<h3>Welcome to Mandi and Madeleine\'s New Page</h3>');
  const people = [{name: 'Mandi'}, {name: 'Madeliene'}, {name: 'Kids'}];
  response.render( 'index', {title: 'Fullstackers', people: people} );
});

module.exports = router;
