const fs = require('fs');

const inputFile = './test.txt';

const asciiNumbers = [
  ' _ ' +
  '| |' +
  '|_|',

  '   ' +
  '  |' +
  '  |',

  ' _ ' +
  ' _|' +
  '|_ ',

  ' _ ' +
  ' _|' +
  ' _|',

  '   ' +
  '|_|' +
  '  |',

  ' _ ' +
  '|_ ' +
  ' _|',

  ' _ ' +
  '|_ ' +
  '|_|',

  ' _ ' +
  '  |' +
  '  |',

  ' _ ' +
  '|_|' +
  '|_|',

  ' _ ' +
  '|_|' +
  ' _|'
]

function getContentLines(fileContent) {
  return fileContent.split('\n');
}

function getCharactersFromLine(lines) {
  return lines.map( x => {
    let characterArray = [];
    for (i = 0; i < x.length; i += 3) {
      characterArray.push(x.slice(i , i + 3));
    }
    return characterArray;
  });
}

function getNumberDigits(lines) {
  let accountNumberDigits = [];

  while(lines.length) {
    accountNumberDigits.push(createDigitsFromLines(lines));
  }

  return accountNumberDigits;

  function createDigitsFromLines(lines) {
    let accountNumberLine = lines.splice(0, 4);

    return accountNumberLine[0].map((character, index) => {
      return character + 
             accountNumberLine[1][index] + 
             accountNumberLine[2][index]; 
    });
  }
}

function getNumbersFromAscii(accountNumbers) {
  let convertedAccountNumbers = accountNumbers.map(convertDigitsToNumbers);
  let result = [];

  function convertDigitsToNumbers(digits) {
    return digits.map((digit) => {
      const indexOfDigit = asciiNumbers.indexOf(digit);
      return indexOfDigit === -1 ? 'Error in data' : indexOfDigit;
    });
  }

  convertedAccountNumbers.forEach((accountNumber) => {
    result.push(accountNumber.join(''));
  });
  return result;
}

function printAccountNumbersFromFile(
  filePath,
  getContentLines, 
  getCharactersFromLine,
  getNumberDigits,
  getNumbersFromAscii
) {
  return fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    const lines = getContentLines(data.toString());
    const linesWithCharacters = getCharactersFromLine(lines);
    const accountNumbers = getNumberDigits(linesWithCharacters);

    for(let asciiNumber of getNumbersFromAscii(accountNumbers)) {
      console.log(asciiNumber);
    }
  });
}

printAccountNumbersFromFile(
  inputFile, 
  getContentLines, 
  getCharactersFromLine,
  getNumberDigits,
  getNumbersFromAscii
);
