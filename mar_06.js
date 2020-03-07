function rgb(r, g, b){
  return `${toHex(r)}${toHex(g)}${toHex(b)}`
}

const toHex = (number) => {
  if (number > 255) return 'FF';
  if (number < 0) return '00';
  let hex = number.toString(16);
  hex = hex.length === 1 ? 0 + hex : hex;
  return hex.toUpperCase();
}
