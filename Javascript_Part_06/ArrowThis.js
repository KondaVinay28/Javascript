let user = {
    username : "Vinay",
    price : 888,
    welcomeMessage : function() {
        console.log(`${this.username}, mastered => func`);
    }
};
// user.username = "konda"; //change the username
user.welcomeMessage();