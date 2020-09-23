const fs = require('fs');

function trimWhiteSpaces(input) {
  const regexEmptyLines = /^\s*[\r\n]/gm;
  return input.replace(regexEmptyLines, '');
}

function trimComments(input) {
  const regexCommentLines = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
  return input.replace(regexCommentLines, '');
}

function getTotalNumberOfLines(input) {
  const regexTotalLines = /\r\n|\r|\n/gm;
  let result = 0;
  try {
    result = input.match(regexTotalLines).length + 1; // plus one to count last line
  } catch (error) {
    console.log(error);
  }
  return result; 
}

function countLines(input) {

  let res = {
    totalLines: 0,
    emptyLines: 0,
    onlyCommentLines: 0,
    totalCodeLines: 0
  }

  res.totalLines = getTotalNumberOfLines(input);

  // Check if file is not empty
  if(input.trim() && res.totalLines > 0) {

    const inputWithoutComments = trimComments(input);
    const inputWithoutWhiteLines = trimWhiteSpaces(input);
    

    let inputWithoutCommentsAndWhiteSpaces = trimWhiteSpaces(inputWithoutComments);

    res.totalCodeLines = getTotalNumberOfLines(inputWithoutCommentsAndWhiteSpaces);

    res.emptyLines = res.totalLines - getTotalNumberOfLines(inputWithoutWhiteLines);
    res.onlyCommentLines = res.totalLines - getTotalNumberOfLines(inputWithoutComments);

    return res;

  }
}

module.exports = countLines;