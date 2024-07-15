/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
•Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
•Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite
them to dinner.
•Print a message to each of the two people still on your list, letting them know they’re still invited.
•Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
// const myFriends: string[] = ["Hooriya", "Anjum", "Wania", "Zainab", "Areesha", "Mahnoor"];
// console.log(`Table is not available. I can invite only 2 persons.\n`);
// // Remove guests until only two names remain
// while (myFriends.length > 2) {
//     let removedFriend = myFriends.pop();
//     console.log(`Sorry Ms. ${removedFriend}, you are not invited.`);
// }
// // Print invitation messages for remaining guests
// for (let i = 0; i < myFriends.length; i++) {
//     console.log(`Ms. ${myFriends[i]}, you're still invited!`);
// }
// // Clear the list by removing the last names if any more left 
// myFriends.pop();
// myFriends.pop();
// console.log("\nRemaining friends list:", myFriends);
var myFriends = ["Hooriya", "Anjum", "Wania", "Zainab", "Areesha", "Mahnoor"];
console.log("Table is not available. I can invite only 2 persons.");
var friend1 = myFriends.pop();
console.log("Sorry Ms. ".concat(friend1, ", You are not invited!"));
var friend2 = myFriends.pop();
console.log("Sorry Ms. ".concat(friend2, ", You are not invited!"));
var friend3 = myFriends.pop();
console.log("Sorry Ms. ".concat(friend3, ", You are not invited!"));
var friend4 = myFriends.pop();
console.log("Sorry Ms. ".concat(friend4, ", You are not invited!"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("Ms. ".concat(myFriends[i], ", You're still invited!"));
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
// const myFriends: string[] = ["Hooriya", "Anjum", "Wania", "Zainab", "Areesha", "Mahnoor"];
// console.log(`Table is not available. I can invite only 2 persons.\n`);
// // Remove guests until only two names remain
// while (myFriends.length > 2) {
//     let removedFriend = myFriends.pop();
//     console.log(`Sorry Ms. ${removedFriend}, you are not invited.`);
// }
// // Print invitation messages for remaining guests
// for (let i = 0; i < myFriends.length; i++) {
//     console.log(`Ms. ${myFriends[i]}, you're still invited!`);
// }
// // Clear the list by removing the last two names
// myFriends.pop();
// myFriends.pop();
// console.log("\nRemaining friends list:", myFriends);
