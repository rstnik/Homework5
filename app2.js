let digit1 = parseFloat(prompt("Enter the distance in kilometers"));
let digit2 = parseFloat(prompt("Enter the distance in ft"));
if (!isNaN(digit1) && !isNaN(digit2)) {
  let poundsConvert = digit1 * 3280.84;
  if (poundsConvert > digit2) {
    alert(digit1 + " kilometers" + " > " + digit2 + " ft");
  } else if (poundsConvert < digit2) {
    alert(digit1 + " kilometers" + " < " + digit2 + " ft");
  } else {
    alert(digit1 + " kilometers" + " = " + digit2 + " ft");
  }
} else {
  alert(`Please enter the correct number`);
}
