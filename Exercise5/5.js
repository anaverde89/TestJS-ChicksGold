const humanizeNumber = (number) => {
  let msg = number;
  let lastNumber = parseInt(number.charAt(number.length - 1));
  if (parseInt(number) > 10 && parseInt(number) < 14) {
    return msg + "th";
  } else {
    if (lastNumber >= 1 && lastNumber <= 3) {
      switch (lastNumber) {
        case 1:
          msg += "st";
          break;
        case 2:
          msg += "nd";
          break;
        case 3:
          msg += "rd";
          break;
        default:
          break;
      }
    } else {
      msg += "th";
    }
  }
  return msg;
};

const clickButton = () => {
  let input = document.getElementById("inputNumber");
  let result = humanizeNumber(input.value);
  console.log(result);
};

let button = document.getElementById("buttonConvert");
button.addEventListener("click", clickButton);
