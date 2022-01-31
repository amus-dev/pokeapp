export const setNumberThreeDigits = (number) => {
  return number.toString().padStart(3, "0");
};

export const substrForIndex = (string, index) => {
  return string.substr(0, index);
};

export const converStringToDecimal = (number) => {
  const numberFormat = `0.${number}`;
  return parseFloat(numberFormat);
};
