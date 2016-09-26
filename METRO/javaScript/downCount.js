// var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
// var days, hours, minutes, seconds; // variables for time units

// var countdown = document.getElementById("tiles"); // get tag element

// getCountdown();

// setInterval(function () { getCountdown(); }, 1000);

// function getCountdown(){

//     // find the amount of "seconds" between now and target
//     var current_date = new Date().getTime();
//     var seconds_left = (target_date - current_date) / 1000;

//     days = pad( parseInt(seconds_left / 86400) );
//     seconds_left = seconds_left % 86400;
         
//     hours = pad( parseInt(seconds_left / 3600) );
//     seconds_left = seconds_left % 3600;
          
//     minutes = pad( parseInt(seconds_left / 60) );
//     seconds = pad( parseInt( seconds_left % 60 ) );

//     // format countdown string + set tag value
//     countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
// }

// function pad(n) {
//     return (n < 10 ? '0' : '') + n;
// }

// Create Countdown


eventTimer = function() {
  eventTime = new Date ($('.timerBrand.clearfix').data('time'));
  currentTime = new Date ();
  timeToEvent = eventTime - currentTime;
  daysToEvent = Math.floor(timeToEvent/(60*60*1000*24)*1).toString().split("");
  hoursToEvent = Math.floor((timeToEvent%(60*60*1000*24))/(60*60*1000)*1).toString().split("");
  minutesToEvent = Math.floor((((timeToEvent%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)).toString().split("");
  secondsToEvent = Math.floor(((((timeToEvent%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)).toString().split("");

  if (timeToEvent > 0){
    if (daysToEvent.length == 1) {
      $('.clock.days .digit_1 div').text(0);
      $('.clock.days .digit_2 div').text(daysToEvent[0]); 
    } else {
      $('.clock.days .digit_1 div div').text(daysToEvent[0]);
      $('.clock.days .digit_2 div').text(daysToEvent[1]);
    }
  
    if (hoursToEvent.length == 1) {
      $('.clock.hours .digit_1 div').text(0);
      $('.clock.hours .digit_2 div').text(hoursToEvent[0]); 
    } else {
      $('.clock.hours .digit_1 div').text(hoursToEvent[0]);
      $('.clock.hours .digit_2 div').text(hoursToEvent[1]);
    }
  
    if (minutesToEvent.length == 1) {
      $('.clock.minutes .digit_1 div').text(0);
      $('.clock.minutes .digit_2 div').text(minutesToEvent[0]); 
    } else {
      $('.clock.minutes .digit_1 div').text(minutesToEvent[0]);
      $('.clock.minutes .digit_2 div').text(minutesToEvent[1]);
    }
  
    if (secondsToEvent.length == 1) {
      $('.clock.seconds .digit_1 div').text(0);
      $('.clock.seconds .digit_2 div').text(secondsToEvent[0]); 
    } else {
      $('.clock.seconds .digit_1 div').text(secondsToEvent[0]);
      $('.clock.seconds .digit_2 div').text(secondsToEvent[1]);
    }
  } else {
    $('.clock .digit_1 div').text(0);
    $('.clock .digit_2 div').text(0);
  }
}

window.setInterval(eventTimer, 1000);