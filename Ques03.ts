/*Store a person's name in avariable, and then print that person's name in lowercase, uppercase 
and titlecase.*/


const personName: string = "Zahara";

// Lowercase
console.log(personName.toLowerCase());

//Uppercase
console.log(personName.toUpperCase());

// Titlecase
let firstLetter : string = personName.charAt(0).toUpperCase();
let restLetters : string = personName.slice(1).toLowerCase();
let titleCase = firstLetter+restLetters;

console.log(titleCase);