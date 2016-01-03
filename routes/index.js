var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./text/leaves-of-spam.txt', 'utf8', function(err, data) {
    res.render('index', { title: 'Leaves of Spam', text: data} );
  });

});


module.exports = router;
