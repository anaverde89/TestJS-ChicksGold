// console.log(findMostPopularItem([1, 1, 1, 2, 2])); // 2

const reverseArray = (arrayNumber) => {
  if (arrayNumber.length === 0) {
    return [];
  }
  return arrayNumber.reverse();
};

const reverseArrayInPlace = (arrayNumber, index = 0) => {
  if (arrayNumber.length === 0) {
    return [];
  }
  let part1 = [];
  let part2 = [];

  part1 = arrayNumber.slice(0, index);
  part2 = arrayNumber.slice(index);

  return part1.concat(reverseArray(part2));
};

const clickButton = () => {
  let input = document.getElementById("inputNumber");
  let arrayInput =
    input.value !== ""
      ? input.value.split(",").map((index) => parseInt(index))
      : [];

  console.log(reverseArray(arrayInput));
};

const clickButton2 = () => {
  let input = document.getElementById("inputNumber");
  let arrayInput =
    input.value !== ""
      ? input.value.split(",").map((index) => parseInt(index))
      : [];
  let input2 = document.getElementById("inputNumber2");
  if (input2.value == "") {
    console.log(reverseArray(arrayInput));
  } else {
    console.log(reverseArrayInPlace(arrayInput, parseInt(input2.value)));
  }
};
let button = document.getElementById("buttonCalculate");
button.addEventListener("click", clickButton);
let button2 = document.getElementById("buttonCalculate2");
button2.addEventListener("click", clickButton2);
