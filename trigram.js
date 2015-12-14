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
  //   fs.readFile('./text/pg30254.txt', 'utf8', function(err, data) {
  //     if (err) console.log(err);
  //
  //     Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //       .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
  //       .pipe(data)
  //       .then(function(response) {
  //         fs.writeFile('./text/romance-trigram.txt', response.get(), function(err, response) {
  //           if (err) console.log(response.error);
  //         });
  //       });
  //
  //   });
  // })();

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

//   big-dummies-trigram.txt	leaves-of-grass.txt	npm-debug.log		romance-trigram.txt
// big-dummies.txt		leaves-trigram.txt	pg30254.txt


// (function getAllTrigrams() {
//
//   fs.readFile('./text/big-dummies-trigram.txt', 'utf8', function(err, data) {
//
//     if (err) console.log(err);
//     for (var i in data) {
//       console.log(data[i]);
//     }
//   });
//
//
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

  // (function sendTrigramsToAlgorithmia() {
  //   fs.readFile('./text/romance-trigram.txt', 'utf8', function(err, data) {
  //     var input = [[data], "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/romance-trigram2.txt"];
  //     console.log(input);
  //     Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //          .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
  //          .pipe(input)
  //          .then(function(output) {
  //            console.log(output);
  //          });
  //   });
  // })();


// resulting trigrams files
// data://.algo/ngram/GenerateTrigramFrequencies/temp/big-dummies-trigram2.txt
//
// data://.algo/ngram/GenerateTrigramFrequencies/temp/leaves-trigrams2.txt
//
// data://.algo/ngram/GenerateTrigramFrequencies/temp/romance-trigram2.txt

}


module.exports = trigram;
