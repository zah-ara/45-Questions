/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
copy of the array of magicians’ names. Because the original array will be unchanged, return the new
array and store it in a separate array. Call show_magicians() with each array to show that you have
one array of the original names and one array with the Great added to each magician’s name. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let magicianNamesCopy = [...magicianNames];
// function show_magicians(greet : string){
//     let withGreetings = "";
//     for(let item of magicianNamesCopy){
//         withGreetings += `${greet}, ${item}\n`;
//     }
//     return withGreetings;
// };
// let myGreetings = show_magicians("Hello");
// let makeArray = myGreetings.split('\n');
//     console.log(makeArray);
//     console.log(magicianNamesCopy);
// Original array of magician names
// 
/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
copy of the array of magicians’ names. Because the original array will be unchanged, return the new
array and store it in a separate array. Call show_magicians() with each array to show that you have
one array of the original names and one array with the Great added to each magician’s name. */
// Array of magician names
var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];
// Function to print the name of each magician in the array
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
// Function to return a new array with "the Great" added to each magician's name
function make_great(names) {
    return names.map(function (name) { return "The Great ".concat(name); });
}
// Create a copy of the original array and modify it
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Show the original array
console.log("Original Magicians:");
show_magicians(magicianNames);
// Show the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
