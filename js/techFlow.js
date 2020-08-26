var questions = '';
$(document).ready(function () {
    console.log("seeded");
    questions = getQuestions();
    if (questions != '') {
        displayQuestion();
        startTimer();
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

    if (questions[0][no].type === "mcq") {
        console.log("mcq");

        $("#inside").html(`
        
        <div id="mainQuestion" class="col-sm-10 col-sm-offset-1 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1 id="mainTech">Tech</h1>
                            <h4 id="ObjectiveQ">Objective Questions <span class="hidden-xs">(MCQ)</span></h4>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-xs-12">
                            <p class="question" id="question" style="margin-bottom: 15px;"></p>
                            <form id="answerForm" >
                                <input type="radio"  class="op1" name="options" value="a"><label id="op1"> </label><br/>
                                <input type="radio"  class="op2" name="options" value="b"><label id="op2"> </label><br/>
                                <input type="radio"  class="op3" name="options" value="c"><label id="op3"> </label><br/>
                                <input type="radio"  class="op4" name="options" value="d"><label id="op4"> </label><br />
                                <div class="row center" id="sbmt" style="text-align: center;">
                                    <button class="quizBTN" id="endTest" onclick="endtest()" data-toggle="endModal" data-target="#endModal">End Test</button>
                                    <button class="quizBTN" id="nextBTN" name="tech" type="submit">Next</button>
                                </div>
                            </form>
                            <div class="endtestWarning" >
                                    

                            </div>
                        </div>
                        <div class="col-xs-12 text-center">
                            <h1 id="timer"></h1>
                        </div>
                    </div>
                </div>
        
        
        `)


        var option1 = questions[0][no].option.a;
        var option2 = questions[0][no].option.b;
        var option3 = questions[0][no].option.c;
        var option4 = questions[0][no].option.d;
        document.getElementById("question").innerHTML = 'Q'+no+': '+ questions[0][no].ques;
        document.getElementById("op1").innerHTML = option1;
        document.getElementById("op2").innerHTML = option2;
        document.getElementById("op3").innerHTML = option3;
        document.getElementById("op4").innerHTML = option4;

        $("#answerForm").submit(function (e) {
            e.preventDefault();
            var selectedResponse = $("input[name='options']:checked").val();
            if (selectedResponse)
                ans = selectedResponse;
            else {
                selectedResponse = 0;
                ans = selectedResponse;
            }
            console.log(ans);
            no=no+1;
            displayQuestion();
        });

    }
    if (questions[0][no].type === "code") {
        console.log("tech")

        $("#inside").html(`
        
        <div id="mainQuestion" class="col-sm-4 col-sm-offset-1 col-xs-12">
        <div class="row">
            <div class="col-xs-12">
                <h1 id="mainTech">Tech</h1>
                <h4 id="ObjectiveQ">Coding </h4>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 text-center">
                <h1 id="timer"></h1>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <p class="question" id="question" style="margin-bottom: 15px;"></p>
                
            </div>
        </div>
        <div class="row center" id="sbmtc" style="text-align: center;">
                <button class="quizBTN" id="endTest" onclick="endtest()" data-toggle="endModal" data-target="#endModal">End Test</button>
            <button class="quizBTN" id="nextBTN" onclick="nextQues(event)"  name="tech" type="submit">Next</button>
        </div>
        
    </div>

    <div id="compiler" class="col-sm-7 col-xs-12">
        <form id="answerForm">
            <div class="col-xs-12">
                <div class="form-group">
                    <label for="comment">Write pseudocode here:</label>
                    <textarea class="form-control" rows="8" id="comment"></textarea>
                </div>
                
            </div>

            <div id="toAddEditor" class="col-xs-12">
                <div id="editor">function Code(items) {
                    var x = "This is the area for your code";
                    return x;
                }</div>
            </div>
            

        </form>

       
        
    </div>
    
    
</div>

    
        
        `).promise().done(function () { 
            addEditor();

        });

        
        document.getElementById("question").innerHTML = 'Q'+no+': '+ questions[0][no].ques;

    

}



};

