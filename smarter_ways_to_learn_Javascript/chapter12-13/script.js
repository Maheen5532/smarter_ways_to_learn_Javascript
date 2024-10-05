// -------Question 1-----
// let Character = prompt("Enter a Character");
// document.write(`Character is ${Character}</br>`);
// if (Characterh == Number.parseInt(Character)) {
//   document.write(`Input is a number </br> </br>`);
// } else if (Character == Character.toUpperCase()) {
//   document.write(`Input is an uppercase letter </br></br>`);
// } else if (Character == Character.toLowerCase()) {
//   document.write(`Input is an lowercase letter </br></br>`);
// } else {
//   document.write(`Invalid Character! </br></br>`);
// }

// ----------Question 2--------
// let input1 = Number.parseInt(prompt("Enter First integer!"));
// let input2 = Number.parseInt(prompt("Enter Second integer!"));
 
// document.write(`First integer: ${input1} </br>`);
// document.write(`Second integer: ${input2}</br>`);

// if (input1 > input2) {
//     return `${input1} is larger than ${input2}.`;
// } else if (num1 < num2) {
//     return `${input2} is larger than ${input1}.`;
// } else {
//     return `Both numbers are equal: ${input1} and ${input2}.`;
// }

// -------------Quesion 3----------
// let num = Number.parseInt(
//     prompt("Enter a number to check number  is positive, negative or zero")
//   );
//   document.write(`User Number: ${num} </br>`);
  
//   if (num > 0) {
//     document.write(`User number is positive </br></br>`);
//   } else if (num < 0) {
//     document.write(`User number is Negative </br></br>`);
//   } else {
//     document.write(`User number is Zero </br></br>`);
//   }

//   --------------Question 4---------

// let Char = prompt("Enter a Character! (Vowel or not)");
// let vowels = ["a", "e", "i", "o", "u"];
// document.write(`Charchter is :${Char}</br>`);
// if (
//     character == vowels[0] || character == vowels[1] ||character == vowels[2] || character == vowels[3] ||character == vowels[4]
//   ) {
//     document.write(`it is a vowel </br></br>`);
//   } else {
//     document.write(`it is not vowel</br></br>`);
//   }

// ---------Question 5--------

// let correctPassword = "Password123";
// let userInput = prompt("Enter your password:");

// if (userInput === null ) {
//     alert("Please enter your password.");
// } else if (userInput === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }

// ----------Question 6--------
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
//     document.write((greeting))
// } else {
//     greeting = "Good evening";
//     document.write((greeting))
// }

// ----------Question 7--------

// let inputTime = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// let time = parseInt(inputTime, 10);

// if (isNaN(time) || time < 0 || time > 2359 || (time % 100) >= 60) {
//     alert("Please enter a valid time in 24-hour format.");
// } else {
//     let greeting;

//     if (time < 1200) {
//         greeting = "Good morning!";
//     } else if (time < 1700) {
//         greeting = "Good afternoon!";
//     } else if (time < 2100) {
//         greeting = "Good evening!";
//     } else {
//         greeting = "Good night!";
//     }

//     alert(greeting);
// }