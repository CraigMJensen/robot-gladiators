var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAtack = 10;

// You can log multiple values at once, example console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that the round is starting
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" variable
    enemyHealth = enemyHealth - playerAtack;
    // Log a resulting message to the console so we know it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Subtract value of "enemyAttack" from the value of "playerHealth" and use that result to update value in "playerHealth" variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console se we know it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();