/* Animals: Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal.
•Modify your program to print a statement about each animal, such as A dog would make a great pet.
•Add a line at the end of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet! */
var animalsName = ["Cat", "Sheep", "Goat", "Camel"];
for (var _i = 0, animalsName_1 = animalsName; _i < animalsName_1.length; _i++) {
    var i = animalsName_1[_i];
    console.log(i);
}
for (var _a = 0, animalsName_2 = animalsName; _a < animalsName_2.length; _a++) {
    var j = animalsName_2[_a];
    console.log(" ".concat(j, " Is a Domestic Animal"));
}
console.log("All these animals (".concat(animalsName[0], ", ").concat(animalsName[1], ", ").concat(animalsName[2], ", \n    and ").concat(animalsName[3], ") have meat that is halal in Islam."));
