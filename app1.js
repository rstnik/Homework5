let digit1 = parseInt(prompt("Enter the first number"));
let digit2 = parseInt(prompt("Enter the second number"));

if (!isNaN(digit1) && !isNaN(digit2)) {
  if (digit1 > digit2) {
    alert(digit1 + " > " + digit2);
  } else if (digit1 < digit2) {
    alert(digit1 + " < " + digit2);
  } else {
    alert(digit1 + " = " + digit2);
  }
} else {
  alert(`Please enter the correct number`);
}
