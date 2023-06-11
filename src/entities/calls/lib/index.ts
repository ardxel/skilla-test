export const formatPhoneNumber = (input: string) => {
  const value = input.replace(/\D+/g, "");
  const _numberLength = 11;

  let result;
  if (input.includes("+8") || input[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  //
  for (let i = 0; i < value.length && i < _numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }

  function prefixNumber(str: string) {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "8 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  }

  return result;

}

export function randomNumber<N1 extends number, N2 extends number>(min: N1, max: N2) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}