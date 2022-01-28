// [Output]
// console.log(countBs("BBC")); // 2
// console.log(countChar("kakkerlak", "k")); // 4

function countBs(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === "B") {
      count++;
    }
  }
  return `The number of "B" in the text is ${count}`;
}

function countChar(text, char) {
  if (char == "") {
    return "You must enter a character";
  }
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === char) {
      count++;
    }
  }
  return `The number of characters "${char}" in the text is ${count}`;
}

const clickButton = () => {
  let input = document.getElementById("inputText");
  console.log(countBs(input.value));
};

const clickButton2 = () => {
  let input = document.getElementById("inputText");
  let text = input.value;
  let input2 = document.getElementById("inputChar");
  let char = input2.value;
  console.log(countChar(text, char));
};
let button = document.getElementById("buttonCountB");
button.addEventListener("click", clickButton);
let button2 = document.getElementById("buttonCountChar");
button2.addEventListener("click", clickButton2);

// console.log(countBs("BBCbbbBBBmnb"));
// console.log(countChar("kakkerlakkkkkjkkkkjjjjjjjjjjjjjjjkj", "k"));
