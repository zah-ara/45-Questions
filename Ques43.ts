/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
copy of the array of magicians’ names. Because the original array will be unchanged, return the new 
array and store it in a separate array. Call show_magicians() with each array to show that you have 
one array of the original names and one array with the Great added to each magician’s name.*/


// Array of magician names
let magicianNames: string[] = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];

// Function to print the name of each magician in the array
function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}

// Function to return a new array with "the Great" added to each magician's name
function make_great(names: string[]): string[] {
    return names.map(name => `The Great ${name}`);
}

// Create a copy of the original array and modify it
let greatMagicians = make_great([...magicianNames]);

// Show the original array
console.log("Original Magicians:");
show_magicians(magicianNames);

// Show the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);