var trigram = function() {
  require('dotenv').load();

  var Algorithmia = require("algorithmia");

  var client = Algorithmia.client(process.env.ALGORITHMIA_KEY)


  var naturalGutenberg = require('natural-gutenberg');

  console.log(naturalGutenberg['whitman-leaves']);

};

module.exports = trigram;
