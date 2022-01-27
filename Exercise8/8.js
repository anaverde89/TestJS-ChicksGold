// console.log(alphabetizeString('Lorem ipsum')); // Leimmoprsu

const alphabetizeString = (text) => {
  let msg = "";
  msg = text
    .split("")
    .sort()
    .map((val) => (val === " " ? "" : val))
    .join("");
  return msg;
};

const clickButton = () => {
  let inputText = document.getElementById("inputText");
  let text = inputText.value;

  console.log(alphabetizeString(text));
};

let button = document.getElementById("buttonSort");
button.addEventListener("click", clickButton);
