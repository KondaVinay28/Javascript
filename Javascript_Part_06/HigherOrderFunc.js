let animal = "Panther"; //Global Scope
function roar() {
  let animal = "Panther"; //Lexical Scope
  console.log(animal); //panther
  function secRoar() {
    let snakeName = "RattleSnake"; //Function Scope
    console.log(snakeName); //RattleSnake
    console.log(animal); //Panther
  }
  secRoar();
}
roar();
