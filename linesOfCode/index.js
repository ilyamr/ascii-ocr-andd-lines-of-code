const fs = require('fs');
const countLines = require(__dirname + '/loc.js');

const testFile = __dirname + '/testData/loc1.txt';
const testFile2 = __dirname + '/testData/loc2.txt';

fs.readFile(testFile, (err, data) => {
  if (err) throw err;
  
  const res = countLines(data.toString());
  console.log('File ' + testFile + ' results: ');
  console.log(res);
  
});

fs.readFile(testFile2, (err, data) => {
  if (err) throw err;
  
  const res = countLines(data.toString());
  console.log('File ' + testFile + ' results: ');
  console.log(res);
  
});