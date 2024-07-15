/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
•If the list is empty, print the message We need to find some users!
•Remove all of the usernames from your array, and make sure the correct message is printed. */


// Array of usernames
let userName = ["Admin" , "Jonathon" , "Sebestian" , "Nicole" , "Lia"];

// Function to print greetings
function printGreetings(userNames: string[]) {
    if (userNames.length === 0) {
        console.log("We need to find some users!");
    } else {
        userNames.forEach((user) => {
            if (user === "Admin") {
                console.log("Hello admin, would you like to see a status report?");
            } else {
                console.log(`Hello ${user}, thank you for logging in again!`);
            }
        });
    }
}

// Initial array with users
printGreetings(userName);

// Remove all usernames to test the empty array condition
userName = [];
console.log("All users removed.");

// Check the message for an empty array
printGreetings(userName);