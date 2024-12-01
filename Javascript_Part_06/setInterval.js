let id = setInterval(() => {
  console.log("Executing after every 2's");
}, 2000);
clearInterval(id); //this clear the timer for executing and stops
