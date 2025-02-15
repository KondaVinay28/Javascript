let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();
//hello
//namaste

// function greet() {
//   return "Congratulations";
// }
// const value = greet();
// console.log(value);
