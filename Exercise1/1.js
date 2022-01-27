function multipleOf(number) {
  const multiples = [2, 3, 5, 7];
  let result = [];
  for (const val of multiples) {
    if (number % val == 0) {
      result.push(val);
    }
  }
  return result;
}

function clickButton() {
  let input = document.getElementById("inputNumber");
  let number = input.value !== "" ? parseInt(input.value) : 0;
  let result = multipleOf(number);
  console.log(`Number ${number} is multiple of number ${result}`);
}

let button = document.getElementById("buttonCalculate");
button.addEventListener("click", clickButton);
