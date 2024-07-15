/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s
name. Call show_magicians() to see that the list has actually been modified. */
// let magicianNames = ["Ayaz" , "Fayaz" , "Tariq", "Mubeen"];
// function show_magicians(greet : string){
//     for(let item of magicianNames){
//         console.log(greet , item);        
//     }
// };
// show_magicians("Hello, How are you Ms.");
// show_magicians("Hello, ");
/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s
name. Call show_magicians() to see that the list has actually been modified. */
// Create an array of magician's names
var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];
// Function to print the name of each magician in the array
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
// Function to modify the array by adding "the Great" to each magician's name
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The Great ".concat(names[i]);
    }
}
// Modify the magician names
make_great(magicianNames);
// Show the modified list of magician names
show_magicians(magicianNames);
