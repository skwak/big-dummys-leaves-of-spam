var trigram = function() {
  require('dotenv').load();

  var Algorithmia = require("algorithmia");

  var client = Algorithmia.client(process.env.ALGORITHMIA_KEY);

  var naturalGutenberg = require('natural-gutenberg');

  var leavesOfGrass = naturalGutenberg['whitman-leaves'];

  var fs = require('fs');
  //
  // fs.writeFile('./text/leaves-of-grass.txt', leavesOfGrass, function (err) {
  //   if (err) throw err;
  // });
  var input = leavesOfGrass;

//   fs.mkdir('./hello',0777,function(err){
//   if (err) throw err;
//
//   fs.writeFile('./hello/world.txt', 'Hello!', function(err){
//     if (err) throw err;
//     console.log('File created with contents: ');
//
//     fs.readFile('./hello/world.txt', 'UTF-8', function(err, data){
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// });

  (function() {
    Algorithmia.client(process.env.ALGORITHMIA_KEY)
      .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
      .pipe(input)

      .then(function(response) {
        fs.writeFile('./text/leaves-trigram.txt', response.get(), function(err, response) {
          if (err) console.log(response.error);
        });
      });
    })();
    
}


module.exports = trigram;
