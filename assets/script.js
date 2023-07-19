$(document).ready(function() {
  
  var currentDayP = $("#currentDay");             
  var timeBlocks = $('.time-block');              
  var saveBtns = $('.saveBtn');                    
  var descriptionInputs = $('.description');       
  var resetBtn = $('#resetBtn');                   

  function tickTockOnTheClock() {                    
    var currentDay = dayjs().format('YYYY-MM-DD HH:mm:ss');       
    currentDayP.text(currentDay);                               
  }

  function updateTimeBlocks() {
    var currentTime = dayjs();

    timeBlocks.each(function() {           
      var schedHour = dayjs($(this).find('.description').data('time'));  
      $(this).removeClass('past future present');         

      if (schedHour.hour() < currentTime.hour()) {                
        $(this).addClass('past');                               
      } else if (schedHour.hour() > currentTime.hour()) {       
        $(this).addClass('future');                          
      } else {                              
        $(this).addClass('present');            
      }
    });
  }

  function loadUsersSched() {
    descriptionInputs.each(function() {       
      var scheduleTime = $(this).data('time');     
      var userSavedActivity = localStorage.getItem(scheduleTime);    

      if (userSavedActivity) {                
        $(this).val(userSavedActivity);     
      }                                     
    });
  }

  tickTockOnTheClock();                               
  setInterval(tickTockOnTheClock, 1000);              

  updateTimeBlocks();                                 
  setInterval(updateTimeBlocks, 60000);              

 
  saveBtns.on('click', function() {           
    var scheduleText = $(this).siblings('.description').val();    
    var scheduleTime = $(this).siblings('.description').data('time');   
    localStorage.setItem(scheduleTime, scheduleText);           
  });


  resetBtn.on('click', function() { 
    if (confirm('Are you sure you want to CLEAR schedule? Press OK to clear.')) {
      localStorage.clear();               
      descriptionInputs.val('');           
    }
  });

  loadUsersSched();   
});
