let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));

if (!isNaN(a) && !isNaN(b)) {
  alert(`${a} ${a % b ? "is not" : "is"} divisible by ${b}`);
  alert(`${b} ${b % a ? "is not" : "is"} divisible by ${a}`);
} else {
  alert(`Please enter the correct number`);
}
// Тернарный способ