const fs = require('fs');
const countLines = require('./loc.js');

it(`Lines Of Code. Counts total lines of clean code`, () => {
  
  const testFile = __dirname + '/testData/loc1.txt';
  const expected = {
    totalLines: 34,
    emptyLines: 13,
    onlyCommentLines: 7,
    totalCodeLines: 13
  };

  return fs.readFile(testFile, (err, data) => {
    if (err) throw err;
    
    const res = countLines(data.toString());
    expect(res).toEqual(expected);
  });
})

it(`Lines Of Code. Counts total lines of clean code`, () => {
  
  const testFile = __dirname + '/testData/loc2.txt';
  const expected = {
    totalLines: 17,
    emptyLines: 2,
    onlyCommentLines: 4,
    totalCodeLines: 10
  };

  return fs.readFile(testFile, (err, data) => {
    if (err) throw err;

    const res = countLines(data.toString());
    expect(res).toEqual(expected);
  });
})