$(document).ready(function() {
  // Variables 
  var currentDayP = $("#currentDay");             // P id to display current time on page / goes with this line p id="currentDay"
  var timeBlocks = $('.time-block');              // class .time-block / goes with this line div class="row time-block
  var saveBtns = $('.saveBtn');                    // Save Button / goes with this line button class="btn saveBtn
  var descriptionInputs = $('.description');      // Class with .description / goes with this line textarea class="col-10 description" 
  var resetBtn = $('#resetBtn');                   // Reset Button /at the bottom of page / clear schedule 

// function ticktockontheclock should update current time on the page 
  function tickTockOnTheClock() {    // kesha song stuck in my head now after naming this lol                
    var currentDay = dayjs().format('YYYY-MM-DD HH:mm:ss');       // Using day.js format YYYY-MM-DD HH:mm:ss
    currentDayP.text(currentDay);                               //   .text() jQuery method will set text of an element, will update p id to display time 
  }

    // function will compare sched hour/current hour, also using (this) will let me change whatever element i want, i like this lol, straight to the point
    timeBlocks.each(function() {            // using .each so fnction will go over EACH item to check ... in class time-block, i guess i should say each element, 
      var schedHour = dayjs($(this).find('.description').data('time'));     //  FIND description/datatime, will create a schedhour variable & use dayjs
      $(this).removeClass('past future present');         // removes the classes past, present, and future so only the CURRENT class should apply 

      if (schedHour.hour() < currentTime.hour()) {                // is sched hour before current hour?
        $(this).addClass('past');                               // Add past class if time is in past 
      } else if (schedHour.hour() > currentTime.hour()) {       // is sched hour after current hour? 
        $(this).addClass('future');                           // Add future class if time is in future time 
      } else {                              //If no to above, sched hour will be current hour 
        $(this).addClass('present');            // Add present class if hour is in present time 
      }
    });
  }

  
