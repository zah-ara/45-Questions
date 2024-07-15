/* Think of your favourite mode of transportation, such as motorcycle, or a car, and makea list that stores
several examples. Use your list to priint a series of statements about these items, such as "I would like to
own a Honda motorcycle"*/
var myTrans = ["Tesla Car", "Harley-Davidson Bike", "Boeing Jet"];
// Step 01:-
// for (let i = 0; i < myTrans.length; i++){
//     console.log(`I would like to own a ${myTrans[i]}`);   
// }
// Step 02:-
myTrans.map(function (ib) {
    console.log("I would like to own a ".concat(ib));
});
