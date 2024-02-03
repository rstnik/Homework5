let number = parseInt(prompt("Enter a three-digit number"));
if (!isNaN(number) && !(number >= 1000 || number < 100)) {
  let digit1 = Math.floor(number / 100) % 10;
  let digit2 = Math.floor(number / 10) % 10;
  let digit3 = number % 10;
  let allDigitsAreEqual = digit1 === digit2 && digit2 === digit3;
  let sameDigits = digit1 === digit2 || digit2 === digit3 || digit1 === digit3;
  if (allDigitsAreEqual) {
    alert("All the numbers are the same");
  } else if (sameDigits) {
    alert("There are identical numbers among the numbers");
  } else {
    alert("All the numbers are different");
  }
} else {
  alert("Please enter the correct number");
}
