/* What are JavaScript Objects?

Objects are variables that can store both values and functions.

Values are stored as key:value pairs called properties.

Functions are stored as key:function() pairs called methods.*/
const student = {
  name: "Vinay",
  class: 12,
  age: 25,
  subjects: ["Hindi", "English", "Math", "Science"],
  username: "VinayKonda@123",
  password: 1234,
};

const { username: user, password: pass } = student;
console.log(user); /* VinayKonda@123 */
