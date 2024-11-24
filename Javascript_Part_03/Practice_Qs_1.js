let msg = " help! ";
console.log(msg.trim().toUpperCase()); //HELP!

let name = "ApnaCollege";
let name2 = name.slice(4, 9); //Colle
let name3 = name.indexOf("na"); //2
let name4 = name.replace("Apna", "Our"); //OurCollege
console.log(name4);

let name5 = "ApnaCollege";
let name6 = name.slice(4); //college
console.log(name6.replace("l", "t").replace("l", "t")); //cottege
