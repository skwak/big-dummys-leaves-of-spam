var trigram = function() {
  require('dotenv').load();

  var Algorithmia = require("algorithmia");

  var client = Algorithmia.client(process.env.ALGORITHMIA_KEY);

  var naturalGutenberg = require('natural-gutenberg');

  var leavesOfGrass = naturalGutenberg['whitman-leaves'];

  var fs = require('fs');

  var input = leavesOfGrass;


  // (function() {
  //   Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //     .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
  //     .pipe(input)
  //
  //     .then(function(response) {
  //       fs.writeFile('./text/leaves-trigram.txt', response.get(), function(err, response) {
  //         if (err) console.log(response.error);
  //       });
  //     });
  //   })();

}


module.exports = trigram;
