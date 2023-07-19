$(document).ready(function() {
  // Variables 
  var currentDayP = $("#currentDay");             // P id to display current time on page / goes with this line p id="currentDay"
  var timeBlocks = $('.time-block');              // class .time-block / goes with this line div class="row time-block
  var saveBtns = $('.saveBtn');                    // Save Button / goes with this line button class="btn saveBtn
  var descriptionInputs = $('.description');      // Class with .description / goes with this line textarea class="col-10 description" 
  var resetBtn = $('#resetBtn');                   // Reset Button /at the bottom of page / clear schedule 

// function ticktockontheclock should update current time on the page 
  function tickTockOnTheClock() {                    
    var currentDay = dayjs().format('YYYY-MM-DD HH:mm:ss');       // Using day.js format YYYY-MM-DD HH:mm:ss
    currentDayP.text(currentDay);                               //   .text() jQuery method will set text of an element, will update p id to display time 
  }
  
