const truncateWords = (text, num) => {
  return num !== 0 ? text.split(" ", num).join(" ") : text;
};

const clickButton = () => {
  let inputText = document.getElementById("inputText");
  let inputNumber = document.getElementById("inputNumber");

  let text = inputText.value;
  let number = inputNumber.value != "" ? inputNumber.value : 0;

  console.log(truncateWords(text, number));
};

let button = document.getElementById("buttonTruncate");
button.addEventListener("click", clickButton);
