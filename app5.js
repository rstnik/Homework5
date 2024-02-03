let digit = parseInt(prompt('Enter a two-digit number'));
if(!isNaN(digit) && !(digit >= 100 || digit < 10)){
    let lastDigit = digit % 10;
let firstDigit = Math.floor(digit / 10) % 10;
if (firstDigit > lastDigit){
    alert(`${firstDigit} > ${lastDigit}`);
} else if (firstDigit < lastDigit){
    alert(`${firstDigit} < ${lastDigit}`)
} else {
    alert(`${firstDigit} = ${lastDigit}`)
}
}else{
    alert(`Please enter the correct number`);
}