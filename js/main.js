// get user data after login
var Data = sessionStorage.getItem("userData");
console.log(Data);
Data = JSON.parse(Data);
// Display user details on dashboard

// $("#userName").html(Data.name);
$("#userReg").html(Data.reg);
// $("#userMobile").html(Data.mobile);
// $("#userEmail").html(Data.email);

function getTech() {
    $(".instructions").html(`

    <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Instructions</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
      Instructions:
      <ol>
      <li>There are 10 compulsory questions.</li>
      <li>The questions are divided into 2 parts consisting of MCQs and Code based.</li>
      <li>The time limit of the test is 30 minutes.</li>
      <li>You cannot go back to the previous questions.</li>
      <li>The timer will start immediately after you press the start button.</li>
      <li>The code for the code based questions should be written in the editor provided.</li>
      <li>Pseudo code can be written to give your logic.</li>
      <li>You can attempt the code based questions in any programming language.</li>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="techStart()">Start</button>
      </div>
    </div>
  </div>
</div>


    `)
}

function techStart(){


window.open("tech.html","_self");
}

function getMan() {
    $(".instructions").html(`

    <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Instructions</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        instruction
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="manStart()">Start</button>
      </div>
    </div>
  </div>
</div>


    `)
}

function manStart(){
  window.open("manageQues.html","_self");
}

function getDesign() {
    $(".instructions").empty();
    designStart();
}

function designStart(){
  window.open("designQues.html","_self");
}