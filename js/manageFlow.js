var questions = '';
$(document).ready(function () {
    console.log("seeded");
    questions = getQuestions();
    if (questions != '') {
        displayQuestion();
        startTimer()
    }



});


var timer = '';


function startTimer() {

    var currentTime = new Date().getTime();
    var stopTime = currentTime + 1800000;

    // Update the count down every 1 second]

    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = stopTime - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="timer"
        timer=minutes + "m " + seconds + "s ";
        document.getElementById("timer").innerHTML = timer;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time End";
            logout();
            console.log("time end");
        }
    }, 1000);
};


var no = 1;
var ans = '';

function displayQuestion() {
    console.log(questions);
    if(no<=9&&no>0){
    document.getElementById("question").innerHTML = 'Q'+no+': '+ questions[0][no].ques;
    }
    else{
        $("#nextBTN").css('display','none');
    }
}


$("#answerForm").submit(function (e) {
    e.preventDefault();
     answer = $("#answer").val() ;
     console.log(answer);

    no=no+1;
    displayQuestion();
});