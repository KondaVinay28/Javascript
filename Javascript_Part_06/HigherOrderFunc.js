let animal = "Panther"; //Global Scope
function roar() {
  let animal = "Panther"; //Lexical Scope
  console.log(animal);
  function secRoar() {
    let snakeName = "RattleSnake"; //Function Scope
    console.log(snakeName);
    console.log(animal);
  }
  secRoar();
}
roar();
