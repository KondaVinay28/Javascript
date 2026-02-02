let students = ["Tony Stark", "Flash", "SpiderMan", "Hulk"];
console.log(students[0].length);
/* Spread Operator */
let updatedStudents = [...students, "SuperMan"];
console.log(updatedStudents); //'Tony Stark', 'Flash', 'SpiderMan', 'Hulk', 'SuperMan'
console.log(students); //'Tony Stark', 'Flash', 'SpiderMan', 'Hulk'
