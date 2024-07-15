/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
// let magicianNames = ["Ayaz" , "Fayaz" , "Tariq", "Mubeen"];
// function show_magicians(){
//     for(let item of magicianNames){
//         console.log(item);        
//     }
// };
// show_magicians();
// show_magicians();
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
// Create an array of magician's names
var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Mubeen"];
// Function to print the name of each magician in the array
function show_magicians(names) {
    names.forEach(function (name) {
        console.log(name);
    });
}
// Call the function and pass the array of magician's names
show_magicians(magicianNames);
