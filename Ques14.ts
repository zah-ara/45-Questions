/* If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you'd like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/


const myFriends: string[] = ["Hooriya", "Wania", "Zainab", "Anjum"];

// 1st method with a for loop
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Ms. ${myFriends[i]}! You are invited to my dinner on Monday`);
}

// 2nd method using map()
myFriends.map((friend) => {
    console.log(`Ms. ${friend}! You are invited to my dinner on Monday`);
});