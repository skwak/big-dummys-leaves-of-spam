var tweets = function() {
  // require('dotenv').load();
  //
  // var fs = require('fs');
  //
  // function getTweets(handle, callback) {
  //   var Algorithmia = require("algorithmia");
  //   Algorithmia.client(process.env.ALGORITHMIA_KEY)
  //     .algo("algo://diego/RetrieveTweetsByUser/0.1.1")
  //     .pipe(handle)
  //     .then(function(output) {
  //       callback(output);
  //     });
  // };
  //
  // getTweets('kwakietalkie', function(tweets) {
  //   var kwakbotTweets = tweets.get();
  //
  //   // format the tweets into proper sentences, with the first letter capitalized and a period to end each tweet.
  //   for(var i in kwakbotTweets) {
  //     var str = kwakbotTweets[i];
  //     var newString = str.charAt(0).toUpperCase() + str.substring(1, str.length) + ".";
  //     kwakbotTweets[i] = newString;
  //   }
  //
  //   for(var i in kwakbotTweets) {
  //     if (i == 0) {
  //       fs.writeFile('./text/beast.txt', kwakbotTweets[i], function(err) {
  //         if (err) return console.log(err);
  //       })
  //     } else {
  //       fs.appendFile('./text/beast.txt', kwakbotTweets[i], function(err) {
  //         if (err) return console.log(err);
  //       })
  //     }
  //   }
  //
  // });


};

module.exports = tweets;
