// pseudo code
// create global variables for the game and score
    // random number(randomNumber) with array 19-120
        // var for random number to pick
        // jquery to display number in html id=random-number
    // user guess with array of possible numbers assigned to crystal 1-12
        // for loop to determine each value of rupee?
    // var for random number to pick
// create on-click event for each of the 4 rupees
// create logic if/else to determine the results of game
// reset after win or loss to create number random number and assigned rupee numbers


// generating a random number between 19-120
var randomNumber = 19 + Math.floor(Math.random() * 101);
console.log("random number: " + randomNumber);

// display the random number in html
$("#number").text(randomNumber);

// generating a number between 1-12 for rupees
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

// onclick functions for all 4 rupee colors

// red rupee onclick
$("#red-rupee").on("click", function() {

    console.log("you clicked on red rupee");

});

// orange rupee onclick
$("#orange-rupee").on("click", function() {
    
    console.log("you clicked on orange rupee");

});

// yellow rupee onclick
$("#yellow-rupee").on("click", function() {
    
    console.log("you clicked on yellow rupee");

});

// green rupee onclick
$("#green-rupee").on("click", function() {
    
    console.log("you clicked on green rupee");

});


// win or lose function
function winOrLose() {

}
   
// reset function
function reset() {
    
}