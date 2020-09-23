# Bank OCR & Lines of Code applications

## Overview

A sample node.js project with Jest for testing that has 2 sub-projects.

### Project setup

```bash
npm install
```
### Run unit tests

```bash
npm run test:unit
```

## 1. Lines of Code (LOC)

```bash
node linesOfCode/index.js
```

The logic behind this script was to:
1. Trim input from all comments by regex.
2. Save trimmed comments (to calculate number of pure comment lines).
3. Trim input without comments from whitespaces (same here, we save this trimmed white spaces to get total number of empty lines).
4. Get total lines of input that was trimmed from comments and then from whitespaces and calculate length of an array.

Script handles all of these cases:
1. URL links(!)
2. Comment characters –/*, */, //– don’t open/close comments inside of strings
3. Strings inside comments are not recognized. That means, the comment /*a”*/”b… ends in front of “b.
4. Executable code can be placed in the same line as a comment: in front of /* or // or after */.
5. Strings count as executable code. Even if they extend over multiple lines or contain whitespace lines.

### Caveats
>"C# has no nested comments"

If we want to handle nested comments after all – the solution is to write regular expressions that describe each of the possible larger elements, find these as well, decide what type of element each is, and discard the ones that are not comments. 

There are tools called lexers or tokenizers that can help with this task. A lexer accepts regular expressions as input, scans a stream, picks out tokens that match the regular expressions, and classifies the token based on which expression it matched. The greedy property of regular expressions is used to ensure the longest match.

Although writing a full lexer is beyond the scope of this challenge, those interested should look at lexer generators such as Flex and JFlex.

## 2. Bank OCR

```bash
node bankOcr/index.js
```

The logic behind this script was to divide input by blocks of 3x3 and then match those blocks to descriped ASCII characters.

The algorithm was something like this:
1. Split input into lines.
2. Slice each line into array of ASCII characters for each line.
3. Map 3 lines into one to receive 3x3 blocks.
4. Match each block to check if it looks something like this: 
```javascript
' _ ' +
'|_|' +
'|_|',
```

5. If it does we return the digit (8 in this case).
6. If not, we return "Error in data".


