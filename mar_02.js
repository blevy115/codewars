const alphabet = 'abcdefghifklmnopqrstuvwxyz';
function isPangram(string){
  for(let i = 0; i< alphabet.length; i++) {
    if (!string.toLowerCase().includes(alphabet[i])) {
      return false;
    };
  };
  return true;
};
