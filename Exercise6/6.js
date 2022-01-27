const range1 = (num1, num2) => {
  let result = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      result.push(i);
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      result.push(i);
    }
  }
  return result;
};

const range2 = (num1, num2, step = 1) => {
  let result = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i += step) {
      result.push(i);
    }
  } else {
    for (let i = num1; i >= num2; i -= step) {
      result.push(i);
    }
  }
  return result;
};

const sumItemsArray = (arrayNums) => {
  return arrayNums.reduce((num1, num2) => num1 + num2);
};

const clickButton = () => {
  let input = document.getElementById("inputNumber");
  let input2 = document.getElementById("inputNumber2");
  let number1 = input.value !== "" ? parseInt(input.value) : 0;
  let number2 = input2.value !== "" ? parseInt(input2.value) : 0;
  let result = range1(number1, number2);
  console.log(result);
};

const clickButton2 = () => {
  let input = document.getElementById("inputNumber3");
  let input2 = document.getElementById("inputNumber4");
  let input3 = document.getElementById("inputNumber5");
  let number1 = input.value !== "" ? parseInt(input.value) : 0;
  let number2 = input2.value !== "" ? parseInt(input2.value) : 0;

  if (input3.value !== "") {
    console.log(range2(number1, number2, parseInt(input3.value)));
  } else {
    console.log(range2(number1, number2));
  }
};

const clickButton3 = () => {
  let input = document.getElementById("inputNumber6");
  let arrayInput =
    input.value !== ""
      ? input.value.split(",").map((index) => parseInt(index))
      : [0];
  console.log(sumItemsArray(arrayInput));
};

let button = document.getElementById("buttonCalculate");
button.addEventListener("click", clickButton);
let button2 = document.getElementById("buttonCalculate2");
button2.addEventListener("click", clickButton2);
let button3 = document.getElementById("buttonCalculate3");
button3.addEventListener("click", clickButton3);
