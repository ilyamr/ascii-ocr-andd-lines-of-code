var fs = require('fs');


function countLines(input) {

  let res = {
    totalLines: 0,
    emptyLines: 0,
    onlyCommentLines: 0,
    totalCodeLines: 0
  }

  // Check if file is not empty
  if(input.trim()) {

    const inputWithoutComments = trimComments(input);
    const inputWithoutWhiteLines = trimWhiteSpaces(input);
    

    let inputWithoutCommentsAndWhiteSpaces = trimWhiteSpaces(inputWithoutComments);

    res.totalLines = getTotalNumberOfLines(input);

    res.totalCodeLines = getTotalNumberOfLines(inputWithoutCommentsAndWhiteSpaces);

    res.emptyLines = res.totalLines - getTotalNumberOfLines(inputWithoutWhiteLines);
    res.onlyCommentLines = res.totalLines - getTotalNumberOfLines(inputWithoutComments);

    // console.log('inputWithoutComments: ', inputWithoutComments);
    // console.log('inputWithoutWhiteLines: ', inputWithoutWhiteLines);
    // console.log('Number of comment inputWithoutCommentsAndWhiteSpaces: ', inputWithoutCommentsAndWhiteSpaces);

    return res;

  }
  else {
    return 
  }
  
  // return input.match(regexEmptyLines);
}

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
  return input.match(regexTotalLines).length;
}




let fileContent = fs.readFile('./testData/loc.txt', (err, data) => {
  if(err) throw err;
  
  console.log(countLines(data.toString()));
});

