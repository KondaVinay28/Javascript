const cars = {
  Name: "Volvo",
  Color: "Black",
};
cars.Name = "Beamer";
console.log(cars);
//JSON.stringify
let strigifiedResult = JSON.stringify(cars);
console.log(strigifiedResult);
//JSON.parse
let parsedResult = JSON.parse(strigifiedResult);
console.log(parsedResult);
