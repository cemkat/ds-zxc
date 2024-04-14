// Prompt the user to enter the first number
let num1 = prompt("Birinchi sonni kiriting:");

let num2 = prompt("Ikkinchi sonni kiriting:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
  alert(num1 + " kattaroq " + num2 + 'dan');
} else if (num2 > num1) {
  alert(num2 + " kattaroq " + num1 + 'dan');
} else {
  alert(num1 + " teng " + num2 + 'ga');
}