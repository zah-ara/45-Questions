var myPlaces = ["Karachi", "Seoul", "Tokyo", "Cairo", "New York", "Chicago"];
// console.log(myPlaces);
// // making a copy of an array
// let copyOfArry = myPlaces.slice();
// let sortedArry = copyOfArry.sort();
// console.log(sortedArry);
// // printing original array
// console.log(myPlaces);
// reversing original array
/// First we have to a copy of original array
var copyOfArry2 = myPlaces.slice();
var reverseOriArray = copyOfArry2.reverse();
//console.log(reverseOriArray);
// printing original array
//console.log(myPlaces);
// Reverse theorder of original array
var reverseOriArray2 = myPlaces.reverse();
//console.log(reverseOriArray2);
var againReverse = reverseOriArray2.reverse();
//console.log(againReverse); // Same as original form 
// Sorting original array
var sortOriArray = myPlaces.sort();
console.log(sortOriArray);
var reverseSortedArray = sortOriArray.reverse();
console.log(reverseSortedArray);
