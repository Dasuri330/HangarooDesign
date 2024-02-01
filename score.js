//function to para mag add ng points

function addPoints() {
    var points = 10; //eto ung starting point ng scoring system
    var score = localStorage.getItem("score") || 0; // getting the current points in storage or setting it as zero if there is no data stored yet

    score += points; // pag nakakuha na ng points si user

    localStorage.setItem("score", score); // eto para makita ni user ung points nya

    alert("Congratulations! You got " + points + " points. Your current score is " + score + ".");

}

// function to para sa maling sagot 

    function wrongAnswer(){
        var wrongAnswers = localStorage.getItem("wrongAnswers") || 0;

        wrongAnswers++; // ito ung taga check kung ilan na ung mali nung user

        localStorage.setItem("wrongAnswers", wrongAnswers); //masesave dito ung kung ilan na mali ni user 

        if (wrongGuesses >= 3) {
            alert("Paawat ka ya mali kana tatlo.");
            document.getElementById("reset").disabled = true; // eto para to sa ano pag stop ng game pag mali na ng tatlo
        }
}


    // function to para dun sa clue
    function provideConsonantClue() {
        var pointsForClue = 25;
        var currentScore = localStorage.getItem("score") || 0;
    
        // Check if the user has enough points to purchase the clue
        if (currentScore >= pointsForClue) {
            // Deduct points for the clue
            currentScore -= pointsForClue;
            localStorage.setItem("score", currentScore);
    
            // Provide the consonant clue to the user
            alert("Here is your clue: The word contains the following consonant letters: _ _ _ _");
    
            // Disable the button after the clue has been used
            document.getElementById("consonantClueButton").disabled = true;
        } else {
            // Alert the user if they don't have enough points
            alert("Your Points is not enough.");
        }
}
    document.getElementById("reset").addEventListener("click", wrongGuess);