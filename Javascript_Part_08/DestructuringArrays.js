let names = ["tony", "bruce", "steve", "peter"];

let [winner, runner, secondRunner, eliminator] = names;
/* Each array value stores in individual names like winner, runner....*/
console.log(winner, runner, secondRunner); /* tony bruce steve */

let [winner2, runner2, ...others] = names;
console.log(others); /* [ 'steve', 'peter' ] */
