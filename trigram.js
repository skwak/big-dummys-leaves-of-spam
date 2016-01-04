var trigram = function() {
  require('dotenv').load();

  var Algorithmia = require("algorithmia");
//
  var naturalGutenberg = require('natural-gutenberg');

  var leavesOfGrass = naturalGutenberg['whitman-leaves'];

  var fs = require('fs');



// 1. split Leaves of Grass into an array of sentences
// 2. make trigrams from this array
// 3. save to text file
    Algorithmia.client(process.env.ALGORITHMIA_KEY)
      .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
      .pipe(leavesOfGrass)
      .then(function(response) {
        var res = response.get();
        var input = [res, "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/leaves-of-grass-trigrams.txt"];
        Algorithmia.client(process.env.ALGORITHMIA_KEY)
          .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
          .pipe(input);
      });

    // do the same for the spam file
    (function() {
      fs.readFile('./text/spam.txt', 'utf8', function(err, data) {

        if (err) console.log(err);

        Algorithmia.client(process.env.ALGORITHMIA_KEY)
          .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
          .pipe(data)
          .then(function(response) {
            var res = response.get();
            console.log(res);
            var input = [res, "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/spam-trigrams.txt"];
            Algorithmia.client(process.env.ALGORITHMIA_KEY)
              .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
              .pipe(input);
          });
      });
    })();

    //do the same for the Big Dummy's file
    (function() {
      fs.readFile('./text/bigdummys.txt', 'utf8', function(err, data) {

        if (err) console.log(err);

        Algorithmia.client(process.env.ALGORITHMIA_KEY)
          .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
          .pipe(data)
          .then(function(response) {
            var res = response.get();
            console.log(res);
            var input = [res, "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/dummys-trigrams.txt"];
            Algorithmia.client(process.env.ALGORITHMIA_KEY)
              .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
              .pipe(input);
          });
      });
    })();


//do the same for Beast
(function() {
  fs.readFile('./text/beast.txt', 'utf8', function(err, data) {

    if (err) console.log(err);

    Algorithmia.client(process.env.ALGORITHMIA_KEY)
      .algo('algo://StanfordNLP/SentenceSplit/0.1.0')
      .pipe(data)
      .then(function(response) {
        var res = response.get();
        console.log(res);
        var input = [res, "xxBeGiN142xx", "xxEnD142xx", "data://.algo/temp/beast-trigrams.txt"];
        Algorithmia.client(process.env.ALGORITHMIA_KEY)
          .algo("algo://ngram/GenerateTrigramFrequencies/0.1.1")
          .pipe(input);
      })
  })
})();


// generate paragraph from spam and save it to the master (beast) text
  var input = [ "data://skwak/trigrams/spam-trigrams.txt", "xxBeGiN142xx", "xxEnD142xx", 50 ];
  Algorithmia.client(process.env.ALGORITHMIA_KEY)
    .algo("algo://lizmrush/GenerateParagraphFromTrigram/0.1.2")
    .pipe(input)
    .then(function(output) {
      var paragraph = output.get();
      fs.writeFile('./text/beast.txt', paragraph, function(err) {
        if (err) return console.log(err);
      })
    });

// do the same for Leaves of Grass
    var input = [ "data://skwak/trigrams/leaves-of-grass-trigrams.txt", "xxBeGiN142xx", "xxEnD142xx", 50 ];
    Algorithmia.client(process.env.ALGORITHMIA_KEY)
      .algo("algo://lizmrush/GenerateParagraphFromTrigram/0.1.2")
      .pipe(input)
      .then(function(output) {
        var paragraph = output.get();
        fs.appendFile('./text/beast.txt', paragraph, function(err) {
          if (err) console.log(err);
        })
      });

// do the same for Big Dummy's
var input = [ "data://skwak/trigrams/dummys-trigrams.txt", "xxBeGiN142xx", "xxEnD142xx", 50 ];
Algorithmia.client(process.env.ALGORITHMIA_KEY)
  .algo("algo://lizmrush/GenerateParagraphFromTrigram/0.1.2")
  .pipe(input)
  .then(function(output) {
    var paragraph = output.get();
    fs.appendFile('./text/beast.txt', paragraph, function(err) {
      if (err) console.log(err);
    })
  });

//do the same for Beast
    var input = [ "data://skwak/trigrams/beast-trigrams.txt", "xxBeGiN142xx", "xxEnD142xx", 100 ];
      Algorithmia.client(process.env.ALGORITHMIA_KEY)
        .algo("algo://lizmrush/GenerateParagraphFromTrigram/0.1.2")
        .pipe(input)
        .then(function(output) {
          var paragraph = output.get();
          fs.writeFile('./text/final-beast.txt', paragraph, function(err) {
            if (err) return console.log(err);
           })
      });

}


module.exports = trigram;
