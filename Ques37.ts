/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a 
shirt of any size with a different message. */


// function make_shirts(size : string , label : string){
//     return size + label 
// }

// let myFunction = make_shirts("Large" , " I love Tokyo");

// console.log(myFunction);

//LARGE
// function make_shirt(label : string , size : string = "Large"){
//    return size + label
// }
// let myFunction = make_shirt(" I love Tokyo ");
// console.log(myFunction);

//MEDIUM
//function make_shirt(label : string , size : string = "Medium"){
//    return size + label
//}
//let myFunction = make_shirt(" I love Tokyo ");
//console.log(myFunction);

//SMALL
//function make_shirt(label : string , size : string = "Small"){
//    return size + label
//}
//let myFunction = make_shirt(" I love Tokyo ");
//console.log(myFunction);

function make_shirt(size : string , label : string){
    return size + label
}

let myFunction = make_shirt("Any size ", "I love Tokyo ");
console.log(myFunction);