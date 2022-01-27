const number = 100;
for (let i = 1; i <= number; i++) {
  let msg = "";
  if (i % 3 == 0) {
    msg = msg + "Fizz";
  }
  if (i % 5 == 0) {
    msg = msg + "Buzz";
  }
  if (msg == "") {
    msg = i;
  }
  console.log(msg);
}
