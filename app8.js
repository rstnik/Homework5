let number = parseInt(prompt("Enter a six-digit number"));
let originalNumber = number;
let reversedNumber = 0;
if (!isNaN(number) && !(number >= 1000000 || number < 100000)) {
  while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  alert(
    `${originalNumber} ${
      originalNumber == reversedNumber ? "is a" : "is not"
    } mirrored`
  );
} else {
  alert(`Please enter the correct number`);
}
