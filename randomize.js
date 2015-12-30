var randomize = function() {
  var fs = require('fs');
  var shuffle = require('shuffle-array');
  var Algorithmia = require('algorithmia');
  var text = [];
  (function() {
    fs.readFile('./text/final-beast.txt', 'utf8', function(err, data) {
      if (err) console.log(err);
      var arr = data.toString().split(".");

      var length = arr.length;


      for(var i in arr) {
        if (arr[i].length > 13) {
          if (typeof arr[i][1] === 'string') {
            if (arr[i][1] === arr[i][1].toLowerCase()) {
              var str = arr[i];
              var newString = str.charAt(1).toUpperCase() + str.substring(2, str.length);
              text.push(newString);
            } else if (arr[i].match(/}/)) {
              var stringy = arr[i];
              var newStringy = stringy.
            }
        }
        // if (arr[i].length < 13) {
        //   delete arr[i];
        // } else if (typeof arr[i][1] === "string") {
        //   if (arr[i][1] === arr[i][1].toLowerCase()) {
        //     var str = arr[i];
        //     var newString = str.charAt(1).toUpperCase() + str.substring(2, str.length);
        //     arr[i] = newString;
        //   }
        // } else if (typeof arr[i] === "number") {
        //   delete arr[i];
        // // } else if (arr[i].match(/}/))
        // } else if (arr[i].match(/\(/)) {
        //   delete arr[i];
        // }
        //
        // arr[i]+=". "



      }

        console.log(arr);
        // if (arr[i].match(/\d/)) {
        //   delete arr[i];
        //   break
        // } else if (arr[i].match(/)/)) {
        //
        // }
        // } else if (arr[i].match(/Internet/)) {
        //   delete arr[i];
        //   break;
        // } else if (arr[i][0] === arr[i][0].toLowerCase()) {
        //   arr[i][0].toUpperCase();
        // } else {
        //   console.log(arr[i]);
        //   newArr.push(arr[i] += ". ");
        // }



    });
  })();

};

module.exports = randomize;
