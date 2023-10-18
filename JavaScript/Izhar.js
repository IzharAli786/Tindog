const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function AgeLeft(Yourage) {
  var maxAge = 90;
  var ageLeft = maxAge - Yourage;
  console.log(
    "Your age left is " +
      ageLeft +
      " years and " +
      ageLeft * 12 +
      " months and " +
      ageLeft * 12 * 30 +
      " days"
  );
  rl.close();
}

rl.question("Please enter your age: ", function (Yourage) {
  AgeLeft(parseInt(Yourage)); // Call the AgeLeft function with parsed age
});
