const fs = require('fs');
const path = require('path'); 

const {getDigitNumbersFromAsciiString} = require('./ocr.js');


it(`OCR. Reads test file with ASCII symbols and checks if it contains 123456789 and 490067715 lines`, () => {
  
  const expected = ['123456789', '490067715'];
  const testFile = __dirname + '/testData/test.txt';

  return fs.readFile(testFile, (err, data) => {
    if (err) throw err;
    
    let res = [];

    for(let asciiNumber of getDigitNumbersFromAsciiString(data.toString())) {
     res.push(asciiNumber);
    }

    expect(res.toString()).toBe(expected.toString());
  });
})

it(`OCR. Reads test file with ASCII symbols and checks if it contains errors`, () => {
  
  const expected = ['123456789', 'Error in data'];
  const testFile = __dirname + '/testData/testWithErrors.txt';

  return fs.readFile(testFile, (err, data) => {
    if (err) throw err;
    
    let res = [];

    for(let asciiNumber of getDigitNumbersFromAsciiString(data.toString())) {
     res.push(asciiNumber);
    }

    expect(res.toString()).toBe(expected.toString());
  });
})