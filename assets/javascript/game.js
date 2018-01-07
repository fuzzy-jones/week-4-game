// pseudo code
// create global variables for the game and score
// generate random number with array 19-120
    // display in html
// generate random rupee value between 1-12 for each rupee
// create on-click event for each of the 4 color rupees
    // add value of rupee clicked to the user score and display in html
// create logic if/else to determine the results of game (win or loss)
// reset after win or loss to create new random number and new rupee values


$(document).ready(function(){

    // generating a random number between 19-120
    var randomNumber = 19 + Math.floor(Math.random() * 101);
    console.log("random number: " + randomNumber);

    // display the random number in html
    $("#number").text(randomNumber);

    // generating a number between 1-12 for each rupee
    var redRupee = 1 + Math.floor(Math.random() * 12);
    console.log("red rupee: " + redRupee);
    var orangeRupee = 1 + Math.floor(Math.random() * 12);
    console.log("orange rupee: " + orangeRupee);
    var yellowRupee = 1 + Math.floor(Math.random() * 12);
    console.log("yellow rupee: " + yellowRupee);
    var greenRupee = 1 + Math.floor(Math.random() * 12);
    console.log("green rupee: " + greenRupee);


    // global variables for game score
    var userScore = 0;
    var wins = 0;
    var losses = 0;

     // reset function to insert into win or lose function
     function reset() {
        //  reset score to 0 in game and display in html
        userScore = 0;
        $("#score").text(userScore)
        // generate a new random number and displaying new number in html and logging in console
        randomNumber = 19 + Math.floor(Math.random() * 101);
        $("#number").text(randomNumber)
        console.log("random number: " + randomNumber);
        // generating new values for each rupee and logging in console
        redRupee = 1 + Math.floor(Math.random() * 12);
        console.log("red rupee: " + redRupee);
        orangeRupee = 1 + Math.floor(Math.random() * 12);
        console.log("orange rupee: " + orangeRupee);
        yellowRupee = 1 + Math.floor(Math.random() * 12);
        console.log("yellow rupee: " + yellowRupee);
        greenRupee = 1 + Math.floor(Math.random() * 12);
        console.log("green rupee: " + greenRupee);
    };
    
    // win or lose function to run in on-click
    function winOrLose() {
        if (randomNumber === userScore) {
            wins++;
            console.log("wins: " + wins);
            $("#wins").text("Wins: " + wins);
            // call reset function to reset values and random number
            reset();
        } else if (userScore > randomNumber){
            losses++;
            console.log("losses: " + losses);
            $("#losses").text("Losses: " + losses);
            // call reset function to reset values and random number
            reset();
        }
    };


    // onclick functions for all 4 rupee colors

    // red rupee onclick
    $("#red-rupee").on("click", function() {
        console.log("you clicked the red rupee");
        // user score is the value of rupee + current score
        userScore = parseInt(redRupee) + userScore;
        $("#score").text(userScore);
        // call win or lose function with built in reset
        winOrLose();
    });

    // orange rupee onclick
    $("#orange-rupee").on("click", function() {
        console.log("you clicked the orange rupee");
        userScore = parseInt(orangeRupee) + userScore;
        $("#score").text(userScore);
        winOrLose();
    });

    // yellow rupee onclick
    $("#yellow-rupee").on("click", function() {  
        console.log("you clicked the yellow rupee");
        userScore = parseInt(yellowRupee) + userScore;
        $("#score").text(userScore);
        winOrLose();
    });

    // green rupee onclick
    $("#green-rupee").on("click", function() {   
        console.log("you clicked the green rupee");
        userScore = parseInt(greenRupee) + userScore;
        $("#score").text(userScore);
        winOrLose();
    });
    

});