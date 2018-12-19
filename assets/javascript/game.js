$(document).ready(function () {
    var intervalId;
    var timeLimit = 30;
    var questions = ["What is the name of Jon Arbuckle's Dog?", "What comic is Bill Watterson famous for creating?", "What's the name of the girl who always pulls the football right before Charlie Brown kicks it?",
    "What are the names of the animals in <i>Get Fuzzy</i>?", "What is the only known name for Dilbert's boss?", "In a comic based underwater, the main character is a shark named:", "What is the name of the dog in <i>Peanuts</i>?",
    "What famous comic is based on a red-haired Viking?", "What is Beetle Bailey's job title?", "What famous great dane has his own comic strip?"];
    var question0 = ["Spot", "Odie", "Marmaduke", "Fido", "Bacchus"];
    var question1 = ["Get Fuzzy", "Garfield","Calvin and Hobbes", "Far Side", "Marmaduke"];
    var question2 = ["Cathy", "Sally", "Marmaduke", "Lucy", "Peppermint Patty"];
    var question3 = ["Bucky and Satchel", "Milo and Otis", "Lilo and Stich", "Bill and Ted", "Marmaduke"];
    var question4 = ["Harry", "Marmaduke", "The General", "Pointy-haired Boss", "Penguin"];
    var question5 = ["Marmaduke", "Sherman", "Bruce", "Jaws", "Sharky McSharkface"];
    var question6 = ["Lassie", "Odie", "Snoopy", "Marmaduke", "Bucky"];
    var question7 = ["Edgar", "Marmaduke", "Gwar", "Hector", "Hagar"];
    var question8 = ["Private", "Sergeant", "Corpral", "Marmaduke", "Captain"];
    var question9 = ["Garfield", "Snoopy", "Shaq", "Hobbes", "Marmaduke"];
    var answers = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
    var images = ["odie.png", "calvin.png", "lucy.png", "fuzzy.png", "boss.png", "sherman.png", "snoopy.png", "hagar.png", "beetle.png", "marmaduke.png"];
    var correctAnswer = [1,2,3,0,3,1,2,4,0,4];
    var currentQuestion = 0;
    var userGuess = 0;
    var correct = 0;

    start();
    function clear() {
        $('#start').html("");
        $('#timer').html("");
        $('#maingame').html("");
        $('#start').removeClass("startBox");
    }
    function start() {
        $('#start').html("<button id='startButton' type='button'>Start</button>");
        $('#start').removeClass("hidden");
    }
    function timer() {
        $('#timer').removeClass("hidden");
        $('#timer').html("<p>Time Left: 30 seconds</p>");
        intervalId = setInterval(countdown, 1000);
    }
    function stopTimer(){
        clearInterval(intervalId);
        timeLimit = 20;
    }
    function countdown() {
        timeLimit--
        $('#timer').html("Time Left: " + timeLimit + " seconds");
        if (timeLimit === 0) {
            stopTimer();
            $('#timer').html("<p style='text-align: center'>Time's Up!'</p>");
            $('#maingame').html("");
            $('#mainGame').html("<img src='assets/images/"+images[currentQuestion]+"' style='width:250px'>")
            $('#mainGame').append("<p class='answerChoices'>"+answers[currentQuestion][correctAnswer[currentQuestion]]+"</p>");
            currentQuestion++
            gameCheck();
        }
    }
    function game() {
        $('#mainGame').removeClass("hidden");
        $('#mainGame').html("<p>"+questions[currentQuestion]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='0'>"+answers[currentQuestion][0]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='1'>"+answers[currentQuestion][1]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='2'>"+answers[currentQuestion][2]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='3'>"+answers[currentQuestion][3]+"</p>");
        $('#mainGame').append("<p class='answerChoices' id='4'>"+answers[currentQuestion][4]+"</p>");
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
            $('#mainGame').append("<img src='assets/images/"+images[currentQuestion]+"' style='width:250px'>")
            $('#mainGame').append("<p class='answerChoices'>"+answers[currentQuestion][correctAnswer[currentQuestion]]+"</p>");
            currentQuestion++;
            gameCheck();
        }else {
            $('#mainGame').html("<p class='timerDisplay'>Incorrect</p>");
            $('#mainGame').append("<img src='assets/images/"+images[currentQuestion]+"' style='width:250px'>")
            $('#mainGame').append("<p class='answerChoices'>"+answers[currentQuestion][correctAnswer[currentQuestion]]+"</p>");
            currentQuestion++
            gameCheck();
        }
    }
    function gameCheck() {
        $('#mainGame').append("<button id='startButton' style='font-size:40px' type='button'>Next</button>")
        $('#startButton').click(function() {
        if (currentQuestion == questions.length) {
            gameEnd();
        }else {
            timer();
            game();
        }});
    };
    function gameEnd() {
        $('#mainGame').html("<p>You were correct "+correct+" out of "+questions.length+" times!</p>");
        $('#timer').html("");
        $('#timer').addClass("hidden");
        $('#mainGame').append("<button id='startButton' type='button'>Play Again?</button>");
        $('#startButton').click(function() {
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
//test array
// var questionArr = [
    //     {
    //         name: "What?",
    //         answers: ["a","b","C","D"],
    //     },{
    //         name: "who?"
    //     }
    // ]
    // console.log(questionArr[currentQuestion].answers[0])