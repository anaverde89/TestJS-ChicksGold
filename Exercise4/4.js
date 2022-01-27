const factorial = (number) => {
  if (number == 0) return 1;
  return number * factorial(number - 1);
};

const clickButton = () => {
  let input = document.getElementById("inputNumber");
  let number = input.value !== "" ? parseInt(input.value) : 0;
  let resultFactorial = factorial(number);
  console.log(`The factorial of ${number} is ${resultFactorial}`);
};

let button = document.getElementById("buttonCalculate");
button.addEventListener("click", clickButton);
