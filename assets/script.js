$(document).ready(function() {

/* Important: Current Day Needs to be Displayed at the Top of Calendar!
  It Should Look Like Month, Day Year Ex: April 10, 2022
  Using dayjs will give us the current day and format
 */
var currentDay = dayjs().format('MMMM D, YYYY');
    
// This will show current day at top of page. 
$("#currentDay").text(currentDay);
  
// Current Hour
var currentHour = dayjs().hour();

// Add event listener to buttons
$('.add-event').on('click', function() {


});

// Save event when save button is clicked function 
$(".saveBtn").click(function() {



});
});

    


/*
  Classes:
- Save Button class saveBtn
- Text Area Class Is Description
- hour is hour class? ( div class="col-2 col-md-1 hour text-center py-3">9AM/div )
- row or time-block is class? (div id="hour-9" class="row time-block"> )
- class = container-fluid or just container?

*/