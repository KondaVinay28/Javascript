const favouriteMovie = "Dictator";
let guess =prompt("Enter the name of the movie?");
while((favouriteMovie != guess ) && (guess!="quit")) {
    guess= prompt("Wrong guess, Please try again!");
}
if(guess==favouriteMovie) {
    console.log(`${favouriteMovie} is correct guess`);
}
else {
    console.log("You loose");
}
