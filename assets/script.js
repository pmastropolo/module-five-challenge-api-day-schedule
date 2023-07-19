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
// needed a function to get saved items from local storage 
  function loadUsersSched() {
    descriptionInputs.each(function() {       // goes over EACH element 
      var scheduleTime = $(this).data('time');    // this = current textarea element // value of datatime in current textarea  
      var userSavedActivity = localStorage.getItem(scheduleTime);   // gets value stored in local storage 

      if (userSavedActivity) {                // if statement to see if any saved activitys 
        $(this).val(userSavedActivity);     // this = current text area , val gets the value , 
      }                                     // so basically should getthe value and text that user entered that waywhen user refresh page it should still be there 
    });
  }
                  
  tickTockOnTheClock();                               // function display current day and time in p id 
  setInterval(tickTockOnTheClock, 1000);              // update every second! 

  updateTimeBlocks();                                 // function update classes in timeblock depending on current time 
  setInterval(updateTimeBlocks, 60000);               // update every minute!   

  // save button function with click event, when user enters text and THEN presses save button, everything should save to local storage 
  saveBtns.on('click', function() {           // this will refer to savebtn so when user clicks save button everything should save to local storage 
    var scheduleText = $(this).siblings('.description').val();    // description text: value will be everything the user typed 
    var scheduleTime = $(this).siblings('.description').data('time');   // description time: gets value of data time with sibling elements for class description 
    localStorage.setItem(scheduleTime, scheduleText);           // will put time and text in local storage to save 
  });

// reset button when igot my sched working, i noticed that there were just a lot of things listed and i wanted to add a way for the user to easily
// remove everything pretty quickly, so adding the reset button seemed like a pretty good solution! Should get presented with box, Are you sure you want to clear sched? 
// wanted to add this just in case the user had pressed the button by accdient, so kind of like a safety default, im pretty sure when we clear local storage
// it is going to git rid of EVERYTHING that was stored in local, so def wanted to add that box 
  resetBtn.on('click', function() { // reset button function, with click event
    if (confirm('Are you sure you want to CLEAR schedule? Press OK to clear.')) {
      localStorage.clear();               // clear from local storage 
      descriptionInputs.val('');          // what user enetered 
    }
  });

  loadUsersSched();   // part of the project was to make sure whatever user put in would stay so if you refresh the page, whatever was typed in should still be there 
});
