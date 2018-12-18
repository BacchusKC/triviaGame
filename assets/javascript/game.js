$(document).ready(function () {
    var intervalId;
    var timeLimit = 30;
    var questions = ["What?", "Who?", "when", "where", "why"];
    var question0 = ["a", "b", "c", "d"];
    var question1 = ["a", "b", "c", "d"];
    var question2 = ["a", "b", "c", "d"];
    var question3 = ["a", "b", "c", "d"];
    var question4 = ["a", "b", "c", "d"];
    var answers = [question0, question1, question2, question3, question4];
    var correctAnswer = [1,3,3,2,1];
    var currentQuestion = 0;
    var answerNum = "";
    var userGuess = 0;
    var correct = 0;
    var incorrect = 0;
    var test1 = ["e","f","g","h"];
    var test = [test1, test2, test3];
    var test1 = ["e","f","g","h"];
    var test2
    var test3

    start();
    answerNum = "question" + currentQuestion;

    // console.log(answers.question3[3]);
    console.log(currentQuestion);
    console.log(answerNum);
    console.log(correctAnswer[currentQuestion]);
    console.log(answers[currentQuestion][3]);
    console.log(questions[2]);
    console.log(test[0][2]);
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
            checkAnswer();
        });
    }
    function checkAnswer() {
        if (userGuess == correctAnswer[currentQuestion]){
            correct++
            
        }
    }
    function gameCheck() {

    }
    $('#startButton').click(function() {
        $('#start').addClass("hidden");
        clear();
        game();
        timer();
    });
    $('p').click(function() {
        start();
        userGuess = event.target.id;
        console.log(userGuess);
    });

});