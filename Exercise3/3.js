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
  return count;
}

function countChar(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBCbbbBBBmnb"));
console.log(countChar("kakkerlakkkkkjkkkkjjjjjjjjjjjjjjjkj", "k"));
