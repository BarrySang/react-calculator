export function extractNumbersAroundSlash(inputString) {
    const regex = /(\d+)\s*\/\s*(\d+)/;
    const match = inputString.match(regex);
    const result = [];
  
    if (match) {
      const [, before, after] = match;
      const slashIndex = match.index + before.length + 1; // Index of the division operator '/'
      const matchStart = (slashIndex - before.length) - 1; // Index of the number before '/'
      const matchEnd = (slashIndex + after.length) - 1; // Index of the number after '/'
  
      result.push({
        before: parseFloat(before),
        after: parseFloat(after),
        range: { start: matchStart, end: matchEnd },
      });
    }
  
    return result;
}

export function evaluateDivision (previous, next) {
    return previous / next
}

export function replaceCharacters(inputString, startRange, endRange, replacementNumber) {
    const beforeRange = inputString.slice(0, startRange);
    const afterRange = inputString.slice(endRange + 1);
    return `${beforeRange}+${replacementNumber}+${afterRange}`;
}
  
  
