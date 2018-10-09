function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate Random number for computer
var randomNumber = getRandomInt(19, 200);
// Create variable to hold users score
var total = 0;
var wins = 0;
var losses = 0;

// Update the screen with the random computer number
$("#number-to-guess").text(randomNumber);
console.log("Random:", randomNumber);

$("#total").text(total);
console.log(total);

$(".btn").each(function () {
    var random = getRandomInt(1, 12);
    $(this).attr("value", random);
    console.log(this);
});

$(".btn").on("click", function () {
    var value = parseInt(this.value);
    console.log(value);
    total = total + value;
    $("#total").text(total);

    if (total === randomNumber) {
        alert("You did math!")
        console.log("You won!");
        wins++;
        $("#wins").text("Wins: " + wins);
        restartGame();
    };

    if (total > randomNumber) {
        alert("A little too far!")
        console.log("You lose!");
        losses++;
        $("#losses").text("Losses: " + losses);
        restartGame();
    };
});

$("#restart").on("click", function () {
    restartGame();
});

function restartGame() {
    randomNumber = getRandomInt(19, 200);
    total = 0;

    $("#number-to-guess").text(randomNumber);
    $("#total").text(total);

    $(".btn").each(function () {
        var random = getRandomInt(1, 12);
        $(this).attr("value", random);
        console.log(this);
    });
}