const {printAccountNumbersFromFile} = require('./ocr.js');

const asciiInput = __dirname + '/testData/test.txt';
const asciiInputWithErrors = __dirname + '/testData/testWithErrors.txt';

setTimeout(()=> printAccountNumbersFromFile(asciiInput), 0 )
setTimeout(() =>printAccountNumbersFromFile(asciiInputWithErrors), 100 )