// console.log(findMostPopularItem([1, 1, 1, 2, 2])); // 2

const findMostPopularItem = (arrayNumber) => {
  let result = {};
  let arraySort = arrayNumber.sort();
  let values = [];
  for (const val of arraySort) {
    if (values.some((item) => item["value"] === val)) {
      let i = values.findIndex((item) => item["value"] === val);
      values[i]["counter"] += 1;
    } else {
      values.push({ value: val, counter: 1 });
    }
  }
  result = values[0];
  for (const item of values) {
    if (item["counter"] > result["counter"]) {
      result = item;
    }
  }
  return `Item ${result["value"]} is repeated ${result["counter"]} times`;
};

const clickButton = () => {
  let input = document.getElementById("inputNumber");
  let arrayInput =
    input.value !== ""
      ? input.value.split(",").map((index) => parseInt(index))
      : [0];

  console.log(findMostPopularItem(arrayInput));
};

let button = document.getElementById("buttonCalculate");
button.addEventListener("click", clickButton);
