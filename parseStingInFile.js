var fs = require('fs');

fs.readFile('file.txt', function(err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");
  var duplicatedEntries = checkDuplicates(array);
  var totalDuplicatedValues = duplicatedEntries.length;
  console.log(duplicatedEntries);
  console.log(totalDuplicatedValues);
});

// function that checks duplicates in an array and returns an array with duplicated values
function checkDuplicates(array) {
  var results = [];
  var sortedArray = array.slice().sort();
  for (i=0; i < array.length; i++) {
    if (sortedArray[i + 1] === array[i]) {
      results.push(array[i]);
    }
  }
  return results;
};
