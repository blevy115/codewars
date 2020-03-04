const  duplicateEncode = (word) => {
  const existing = {};
  let encodedWord = '';
  for (let i = 0; i< word.length; i++) {
    const letter = word.toLowerCase()[i];
    if (!existing[letter]) {
      existing[letter] = 1;
    } else {
      existing[letter] += 1;
    }
  }
  for (let i = 0; i< word.length; i++) {
    const letter = word.toLowerCase()[i];
    encodedWord += existing[letter] === 1 ? '(':')';
  }
  return encodedWord;
}
