const age = [22, 19, 22, 19, 24, 23, 22];
const checkAge = age.every((el) => {
  return el > 18;
});
console.log(checkAge); //true
