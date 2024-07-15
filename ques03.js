/*Store a person's name in avariable, and then print that person's name in lowercase, uppercase
and titlecase.*/
var personName = "Zahara";
// Lowercase
console.log(personName.toLowerCase());
//Uppercase
console.log(personName.toUpperCase());
// Titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
