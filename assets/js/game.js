var playerName = window.prompt("What is your robot's name?");
// Note lack of quotation marks around playerName
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// This will do math and log 20
console.log(10 + 10);
// What is this about?  This is string concatenation.  combines strings and variables among others.
console.log("Our robot's name is " + playerName);
// This creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

// fight();