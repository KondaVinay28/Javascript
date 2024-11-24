// let start = ["January", "July", "march", "august"];
// start[0] = "july";
// start[1] = "june";
// console.log(start);

let start = ["January", "July", "march", "august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july")
console.log(start);
// output : july, june, march, august