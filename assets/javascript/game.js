//questions for true or false game
var trueOrFalseQuestions = [{
            q: "Is the main character of 'The Little Mermaid' name Arial?",
            a: "f"
        },
        {
            q: "Was The Little Mermaid created in 2015?",
            a: "f"
        },
        {
            q: "Ariel's hair colour is green",
            a: "f"
        },
        {
            q: "Ariel sings the song in the movie The Little Mermaid ' Kiss the Girl'. ",
            a: "f"
        },
        {
            q: "Ariel wanted more then anything was to be human.",
            a: "t"
        },
        {
            q: "Is the main protaginest Ursula ?",
            a: "t"
        },
        {
            q: "Is Ursula an Octopus?",
            a: "f"
        },
        {
            q: "Was The Little Mermaid one of the first features to use Pixar’s computer animation process?",
            a: "t"
        },
        {
            q: "Was the inspiration for the protaganst Ursula Positively Divine?",
            a: "t"
        },
        {
            q: "Are you able to find the other main disney characters like; Mickey Mouse, Goofy, and Kermet the Frog in the movie The Little Mermaid?",
            a: "t"
        },
        {
            q: "Ursula was originally planned to be King Tritons sister",
            a: "t"
        },
        {
            q: "Christopher Daniel Barnes (Prince Eric) was only 17 when he recorded the voice of Prince Eric?",
            a: "t"
        },
        {
            q: "Did Disney mix and create the blue-green colour of Ariels tail and label it 'Ariel' in her honor?",
            a: "t"
        }
    ];
    
    
    //game score starts at 0
    var score = 0;
    
    // questions start at 0
    var trueOrFalseQuestionsIndex = 0;
    
    //functions of the game
    
    //functions render a question and update score
    function renderQuestion() {
    
        // If there are still more questions, render the next one
        if (trueOrFalseQuestionsIndex <= (trueOrFalseQuestions.length - 1)) {
            // update the id tag question with the next question in the array
            document.querySelector("#question").innerHTML = trueOrFalseQuestions[trueOrFalseQuestionsIndex].q;
        }
    
        // once there is no more questions the game is finished
        else {
            // update selectors with below information
            document.querySelector("#question").outerHTML = "Game Over!";
            document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + trueOrFalseQuestions.length;
            document.querySelector("#answer").innerHTML = " ";
        }
    }
    
    // Function that updates the score...
    function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
    }
    
    //process of playing the actual game
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
    
        //user inputs
        if (userGuess === "t" || userGuess === "f") {
            // No more questions
            if (trueOrFalseQuestionsIndex >= trueOrFalseQuestions.length) {
              return;
            }
    
            var q = trueOrFalseQuestions[trueOrFalseQuestionsIndex];
            // if user input matches the key answer
            if (userGuess === q.a) {
                document.querySelector("#answer").innerHTML = "CORRECT!";
                score++;
                updateScore();
                // if user input does not match the key answer
            } else {
              document.querySelector("#answer").innerHTML = "WRONG!";
            }
    
            // game displays next question
            trueOrFalseQuestionsIndex++;
            renderQuestion();
        }
    }
    
    
    window.onload = function () {
        renderQuestion();
        updateScore();
    }