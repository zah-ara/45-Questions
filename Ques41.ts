/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array. */


// Create an array of magician's names
let magicianNames: string[] = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];

// Function to print the name of each magician in the array
function show_magicians(names: string[]): void {
    names.forEach(name => {
        console.log(name);
    });
}

// Call the function and pass the array of magician's names
show_magicians(magicianNames);
