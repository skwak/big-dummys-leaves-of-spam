var finalize = function() {
  // var fs = require('fs');
  // var finalText = [];
  // var Algorithmia = require("algorithmia");
  //
  // // This is where I format everything and improve the grammar and flow a bit
  // (function() {
  //   fs.readFile('./text/final-beast.txt', 'utf8', function(err, data) {
  //     if (err) console.log(err);
  //
  //     var arr = data.split(/[\.,!-?]\s/);
  //     for(var i in arr) {
  //       var length = arr[i].length;
  //       arr[i] = arr[i].replace(/\(/, "");
  //       arr[i] = arr[i].replace(/\)/, "");
  //       arr[i] = arr[i].replace(/\}/, "");
  //       arr[i] = arr[i].replace(/\,/, "");
  //       arr[i] = arr[i].replace(/\-/, "");
  //       arr[i] = arr[i].replace(/\[/, "");
  //       arr[i] = arr[i].replace(/\]/, "");
  //       arr[i] = arr[i].replace(/\s\s/, "");
  //
  //       if (length < 6) {
  //         delete arr[i];
  //       }
  //
  //
  //       if (typeof arr[i] !== 'undefined') {
  //
  //         if (arr[i][0] === "'") {
  //           var betterString = arr[i].substring(1, length);
  //           arr[i] = betterString;
  //         }
  //
  //         if (arr[i][0] === " ") {
  //             var newString = arr[i].substring(1, length);
  //             arr[i] = newString;
  //         }
  //
  //         if (arr[i][0] === arr[i][0].toLowerCase()) {
  //           var subString = arr[i].substring(1, length);
  //           var newString = arr[i][0].toUpperCase() + subString;
  //           arr[i] = newString;
  //         }
  //
  //         if (arr[i][length - 2] + arr[i][length - 1] === "  ") {
  //           var bestString = arr[i].substring(0, length - 2);
  //           arr[i] = bestString;
  //         }
  //
  //         if (arr[i][length - 1] === " ") {
  //           var bestString = arr[i].substring(0, length - 1);
  //           arr[i] = bestString;
  //         }
  //
  //
  //         if (i % 2 === 0) {
  //           arr[i] = arr[i] + ". ";
  //         } else if (i % 3 === 0) {
  //           arr[i] = arr[i] + "! ";
  //         } else if (i % 11 === 0){
  //           arr[i] = arr[i] + "? ";
  //         } else {
  //           arr[i] = arr[i] + ". ";
  //         }
  //         finalText.push(arr[i]);
  //       }
  //
  //
  //     }
  //
  //
  //     for (var i in finalText) {
  //       if (i === 0) {
  //         fs.writeFile('./text/leaves-of-spam.txt', finalText[i], function(err) {
  //           if (err) return console.log(err);
  //         })
  //       } else if (i % 11 === 0 && i !== 0){
  //         fs.appendFile('./text/leaves-of-spam.txt', finalText[i] + "\n\n", function(err) {
  //           if (err) console.log(err);
  //         })
  //       } else {
  //         fs.appendFile('./text/leaves-of-spam.txt', finalText[i], function(err) {
  //           if (err) console.log(err);
  //         })
  //       }
  //     }
  //
  //   })
  // })();


};

module.exports = finalize;
