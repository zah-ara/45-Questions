/* Seeing the World: Think of at least five places in the world you’d like to visit.
•Store the locations in a array. Make sure the array is not in alphabetical order.
•Print your array in its original order.
•Print your array in alphabetical order without modifying the actual list.
•Show that your array is still in its original order by printing it.
•Print your array in reverse alphabetical order without changing the order of the original list.
•Show that your array is still in its original order by printing it again.
•Reverse the order of your list. Print the array to show that its order has changed.
•Reverse the order of your list again. Print the list to show it’s back to its original order.
•Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
•Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.*/


let myPlaces: string [] = ["Karachi", "Seoul", "Tokyo", "Cairo", "New York", "Chicago"];
// console.log(myPlaces);

// // making a copy of an array
// let copyOfArry = myPlaces.slice();
// let sortedArry = copyOfArry.sort();
// console.log(sortedArry);

// // printing original array
// console.log(myPlaces);

// reversing original array
/// First we have to a copy of original array
let copyOfArry2 = myPlaces.slice();
let reverseOriArray = copyOfArry2.reverse();
//console.log(reverseOriArray);

// printing original array
//console.log(myPlaces);

// Reverse theorder of original array
let reverseOriArray2 = myPlaces.reverse();
//console.log(reverseOriArray2);

let againReverse = reverseOriArray2.reverse();
//console.log(againReverse); // Same as original form 

// Sorting original array
let sortOriArray = myPlaces.sort();
console.log(sortOriArray);

let reverseSortedArray = sortOriArray.reverse();
console.log(reverseSortedArray);