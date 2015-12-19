var tweets = function() {
  require('dotenv').load();

  function getTweets(handle, callback) {
    var Algorithmia = require("algorithmia");
    Algorithmia.client(process.env.ALGORITHMIA_KEY)
      .algo("algo://diego/RetrieveTweetsByUser/0.1.1")
      .pipe(handle)
      .then(function(output) {
        callback(output);
      });
  };

  getTweets('kwakietalkie', function(tweets) {
    var dreamTweets = tweets.get();
    console.log(dreamTweets);
  });


};

module.exports = tweets;
