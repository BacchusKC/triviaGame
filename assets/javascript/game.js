$(document).ready(function () {
    var intervalId;
    var timeLimit = 30;
    var questions = ["What?", "Who?", "when", "where", "why"];
    // var questionArr = [
    //     {
    //         name: "What?",
    //         answers: ["a","b","C","D"],
    //     },{
    //         name: "who?"
    //     }
    // ]
    // console.log(questionArr[currentQuestion].answers[0])
    var question0 = ["a", "b", "c", "d"];
    var question1 = ["a", "b", "c", "d"];
    var question2 = ["a", "b", "c", "d"];
    var question3 = ["a", "b", "c", "d"];
    var question4 = ["a", "b", "c", "d"];
    var answers = [question0, question1, question2, question3, question4];
    var correctAnswer = [1,3,3,2,1];
    var currentQuestion = 1;
    var userGuess = 0;
    var correct = 0;

    start();
    // answerNum = "question" + currentQuestion;

    // console.log(answers.question3[3]);
    // console.log(currentQuestion);
    // console.log(answerNum);
    // console.log(correctAnswer[currentQuestion]);
    console.log(answers[currentQuestion][correctAnswer[currentQuestion]]);
    // console.log(questions[2]);
    // console.log(answers[0][2]);
    function clear() {
        $('#start').html("");
        $('#timer').html("");
        $('#maingame').html("");
        $('#start').removeClass("startBox");
    }
    function start() {
        $('#start').html("<button id='startButton' type='button'>Start</button>");
        // $('#start').addClass("startBox");
        $('#start').removeClass("hidden");
    }
    function timer() {
        $('#timer').addClass("timerRun");
        $('#timer').removeClass("hidden");
        $('#timer').html("<p class='timerDisplay'>Time Left: 30 seconds</p>");
        intervalId = setInterval(countdown, 1000);
    }
    function stopTimer(){
        clearInterval(intervalId);
        timeLimit = 30;
    }
    function countdown() {
        timeLimit--

        $('#timer').html("<p class='timerDisplay'>Time Left: " + timeLimit + " seconds</p>");
        if (timeLimit === 0) {
            stopTimer();
            $('#timer').html("<p class='timerDisplay'>Time's Up!'</p>");
            currentQuestion++
            gameCheck();
        }
    }
    function game() {
        $('#mainGame').removeClass("hidden");
        // $('#mainGame').addClass("gamePlay");
        $('#mainGame').html("<p>"+questions[currentQuestion]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='0'>"+answers[currentQuestion][0]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='1'>"+answers[currentQuestion][1]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='2'>"+answers[currentQuestion][2]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='3'>"+answers[currentQuestion][3]+"</p>");
        $('.answerChoices').click(function() {
            userGuess = event.target.id;
            console.log(userGuess);
            $('#mainGame').html("");
            stopTimer();
            checkAnswer();
        });
    }
    function checkAnswer() {
        if (userGuess == correctAnswer[currentQuestion]){
            correct++;
            $('#mainGame').html("<p class='timerDisplay'>Correct</p>");
            // $('#mainGame').append("<img src='"+images[currentQuestion]+"' style='width:300px'>")
            $('#mainGame').append("<p class='answerCorrect'>"+answers[currentQuestion][correctAnswer[currentQuestion]]+"</p>");
            currentQuestion++;
            gameCheck();
        }else {
            $('#mainGame').html("<p class='timerDisplay'>Incorrect</p>");
            // $('#mainGame').append("<img src='"+images[currentQuestion]+"' style='width:300px'>")
            $('#mainGame').append("<p class='answerCorrect'>"+answers[currentQuestion][correctAnswer[currentQuestion]]+"</p>");
            currentQuestion++
            gameCheck();
        }
    }
    function gameCheck() {
        $('#mainGame').append("<button id='nextButton' type='button'>Next</button>")
        $('#nextButton').click(function() {
        if (currentQuestion == questions.length) {
            gameEnd();
        }else {
            timer();
            game();
        }});
    };
    function gameEnd() {
        $('#mainGame').html("<p>You were correct "+correct+"out of"+questions.length+"times!</p>");
        $('#timer').html("");
        $('#mainGame').append("<button id='nextButton' type='button'>Play Again?</button>");
        $('#nextButton').click(function() {
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        clear();
        game();
        timer();
    });
    }
    $('#startButton').click(function() {
        $('#start').addClass("hidden");
        clear();
        game();
        timer();
    });
});