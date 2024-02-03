let digit = prompt("Enter the number");
if (!isNaN(digit)) {
  let lastDigit = digit % 10;
  if (digit % 2) {
    alert(`${digit} is an odd number, the last digit is: ${lastDigit}`);
  } else {
    alert(`${digit} is an even number, the last digit is: ${lastDigit}`);
  }
} else {
  alert(`Please enter the correct number`);
}
