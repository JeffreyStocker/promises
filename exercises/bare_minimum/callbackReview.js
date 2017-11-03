/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');
var http = require('http');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(error, data) {
    if (error) {
      callback(error, null);
      return;
    }
    var outPut = data.split('\n');
    callback(null, outPut[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  https.get(url, function (res, error) {
    if (error) {
      callback (error, null);
      return;
    }
    callback (null, res.statusCode);
  }).on ('error', function (error) {
    callback (error, null);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
