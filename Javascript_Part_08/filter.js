const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = nums.filter((el) => {
  return el % 2 == 0;
});
console.log(evenNumbers); //2,4,6,8,10
