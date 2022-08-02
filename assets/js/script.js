// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // Get task and time using jQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save local storage
      localStorage.setItem(time, text);
  });
  function timeTracker() {
    //Update current schedule
$("#8AM .description").val(localStorage.getItem("8AM"));
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

  
}

    //get current time
    var currentTime = moment().hour();
  // parse the hour integer and check against current hour
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    console.log(timeBlock) 
    if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }
})

timeTracker();
 });


















