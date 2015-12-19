var tweets = function() {
  require('dotenv').load();

  var fs = require('fs');

  // function getTweets(handle, callback) {
  //   var Algorithmia = require("algorithmia");
  //   Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //     .algo("algo://diego/RetrieveTweetsByUser/0.1.1")
  //     .pipe(handle)
  //     .then(function(output) {
  //       callback(output);
  //     });
  // };

  // getTweets('kwakietalkie', function(tweets) {
  //   var kwakbotTweets = tweets.get();
  //   fs.writeFile('./text/beast.txt', kwakbotTweets, function(err) {
  //     if (err) return console.log(err);
  //   })
  // });


};

module.exports = tweets;
