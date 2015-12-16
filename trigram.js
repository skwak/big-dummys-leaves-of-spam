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


  // (function() {
  //   fs.readFile('./text/big-dummies.txt', 'utf8', function(err, data) {
  //     if (err) console.log(err);
  //
  //     Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //       .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
  //       .pipe(data)
  //       .then(function(response) {
  //         fs.writeFile('./text/big-dummies-trigram.txt', response.get(), function(err, response) {
  //           if (err) console.log(response.error);
  //         });
  //       });
  //
  //   });
  // })();


  // (function sendTrigramsToAlgorithmia() {
  //   fs.readFile('./text/leaves-trigram.txt', 'utf8', function(err, data) {
  //     var input = [[data], "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/leaves-trigrams2.txt"];
  //     console.log(input);
  //     Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //          .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
  //          .pipe(input)
  //          .then(function(output) {
  //            console.log(output);
  //          });
  //   });
  // })();
  //
  // (function sendTrigramsToAlgorithmia() {
  //   fs.readFile('./text/big-dummies-trigram.txt', 'utf8', function(err, data) {
  //     var input = [[data], "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/big-dummies-trigram2.txt"];
  //     console.log(input);
  //     Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //          .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
  //          .pipe(input)
  //          .then(function(output) {
  //            console.log(output);
  //          });
  //   });
  // })();
  //


// var input = ["data://.algo/ngram/GenerateTrigramFrequencies/temp/big-dummies-trigram2.txt", "xxBeGiN142xx", "xxEnD142xx"];
// Algorithmia.client(process.env.ALGORITHMIA_KEY)
//            .algo("algo://ngram/RandomTextFromTrigram/0.1.1")
//            .pipe(input)
//            .then(function(output) {
//              console.log(output);
//            });
//
// }

// var input = ["data://.algo/ngram/GenerateTrigramFrequencies/temp/leaves-trigrams2.txt", "xxBeGiN142xx", "xxEnD142xx"];
// Algorithmia.client(process.env.ALGORITHMIA_KEY)
//            .algo("algo://ngram/RandomTextFromTrigram/0.1.1")
//            .pipe(input)
//            .then(function(output) {
//              console.log(output);
//            });
//
// }


module.exports = trigram;
