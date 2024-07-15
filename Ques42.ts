/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
name. Call show_magicians() to see that the list has actually been modified. */


// Create an array of magician's names
let magicianNames: string[] = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];

// Function to print the name of each magician in the array
function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}

// Function to modify the array by adding "the Great" to each magician's name
function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = `The Great ${names[i]}`;
    }
}

// Modify the magician names
make_great(magicianNames);

// Show the modified list of magician names
show_magicians(magicianNames);