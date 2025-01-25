// foreach 
// every
// filter 
// reduce 
// Map
// some 
const array = [1, 2, 3, 4, 5];
array.map((el) => {
    return el*2;
});
//Array of objects
const student = [
    {
        name : "konda",
        marks : 89,
    },
    {
        name : "Vinay",
        marks : 99,
    },
];
student.forEach((el) => {
    console.log(el.name);
});