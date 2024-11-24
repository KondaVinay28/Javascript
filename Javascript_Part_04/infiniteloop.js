// The loop that runs Infinity which means the ending condition is always true
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonderwoman", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(`List-1--${heroes}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}
