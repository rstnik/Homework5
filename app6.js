let number = parseInt(prompt("Enter a three-digit number"));
if (!isNaN(number) && !(number >= 1000 || number < 100)) {
  let digit1 = Math.floor(number / 100) % 10;
  let digit2 = Math.floor(number / 10) % 10;
  let digit3 = number % 10;
  let sumDigits = digit1 + digit2 + digit3;
  let multipleDigits = digit1 * digit2 * digit3;
  alert(`${sumDigits} is ${sumDigits % 2 ? "odd" : "even"} number`);
  alert(`${sumDigits} ${sumDigits % 5 ? "is not" : "is"} a multiple of 5`);
  alert(`${multipleDigits} ${multipleDigits > 100 ? ">" : "<"} 100`);
} else {
  alert(`Please enter the correct number`);
}
