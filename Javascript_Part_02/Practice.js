//Javascript Ground
//Nested if-else statements
let marks = 85;
if(marks >= 35) { //this condition is true -> Output : Passed
    console.log("Passed");
    if(marks >=80) { //this condition is false -> Output : Skips this
        console.log("Grade : A+");
    }
    else { //this will be automatically executed if the above statement is false
        console.log("You need to improve!");
    }
                }
    else {
    console.log("Better luck next time!");
    }



