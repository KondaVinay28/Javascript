// call stack in js follows LIFO principle
// Last-in-first-out
function one() {
  //   console.log("Executed one");
  return 1;
}
function two() {
  //   console.log("Executed Two");
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
