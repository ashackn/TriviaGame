
   var timeleft = 60;
    var correctAnswer=0;
    var clearTimer;
    var downloadTimer;

    function updateTimer() {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
    }

    function restartPage () {
        alert("You're out of time, GAME OVER! " + correctAnswer + " " +"CORRECT.");
        location.reload();
    }

    function startButton(){
        timeleft=60;
        
            clearInterval(downloadTimer);
            clearInterval(clearTimer);
        
        clearTimer = setInterval(clear, 1000);  
        downloadTimer = setInterval(updateTimer,1000);
    }

    function clear (){
        if(timeleft === 0) {
        clearInterval(downloadTimer);
        clearInterval(clearTimer);
        alert("GAME OVER: " + correctAnswer + " " +"CORRECT");
        }
    }

    function after_submit(){
        clearInterval(downloadTimer);
        clearInterval(clearTimer);
        alert("QUIZ COMPLETE: " + correctAnswer + " " +"CORRECT");

    
    }
    


function verify(){

var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var question3 = document.trivia.question3.value;
var question4 = document.trivia.question4.value;
var question5 = document.trivia.question5.value;
var question6 = document.trivia.question6.value;
var question7 = document.trivia.question7.value;
var question8 = document.trivia.question8.value;
var question9 = document.trivia.question9.value;
var question10 = document.trivia.question10.value;
correctAnswer = 0;


if (question1 ==="Gettysburg") {
    correctAnswer++;
}

if (question2 ==="South Carolina") {
    correctAnswer++;
}

if (question3 ==="2 Minutes") {
    correctAnswer++;
}

if (question4 ==="In God We Trust") {
    correctAnswer++;
}

if (question5 ==="Cherokee") {
    correctAnswer++;
}

if (question6 ==="William Seward") {
    correctAnswer++;
}

if (question7 ==="Robert Smalls") {
    correctAnswer++;
}

if (question8 ==="John J. Williams") {
    correctAnswer++;
}

if (question9 ==="28,693") {
    correctAnswer++;
}

if (question10 ==="$13.00") {
    correctAnswer++;
}


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("howManyCorrect").innerHTML =  correctAnswer + " correct.";
after_submit();
};