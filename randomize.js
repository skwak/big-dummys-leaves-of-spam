var randomize = function() {
  var fs = require('fs');

  (function() {
    fs.readFile('./text/beast.txt', 'utf8', function(err, data) {
      if (err) console.log(err);
      var arr = data.toString().split("\n");
      console.log(arr);
    });
  })();

};

module.exports = randomize;

// var fs = require('fs');
// fs.readFile('file.txt', function(err, data) {
//     if(err) throw err;
//     var array = data.toString().split("\n");
//     for(i in array) {
//         console.log(array[i]);
//     }
// });
