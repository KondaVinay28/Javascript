//storing and retrieving data from local storage
//In local storage the values are stored in key value pairs (objects)
let user = {
  name: "Vinay",
  age: 24,
};

let cart = [];
localStorage.setItem("userData", JSON.stringify(user));

// Retrieve and parse the object
const storedUserData = localStorage.getItem("userData");
if (storedUserData) {
  const userData = JSON.parse(storedUserData);
  console.log(userData);
  cart.push(userData);
  console.log(cart);
} else {
  console.log("User data not found in local storage");
}
