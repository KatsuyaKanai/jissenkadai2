/*global $*/
/*global timer*/
/*global msec*/
/*global sec*/
/*global min*/
/*global hour*/
/*global msecNumber*/
/*global secNumber*/
/*global minNumber*/
/*global hourNumber*/



$(function() {
 
   
    $('#tgCountupTimer #startButton').click(function() {
       
        $('#tgCountupTimer .time').html;
 
        timer = setInterval("countUp()", 100);
 
        $(this).attr('disabled','disabled');
        $('#tgCountupTimer #stopButton').removeAttr('disabled');
    });
 
 
   
    $('#tgCountupTimer #stopButton').click(function() {
        clearInterval(timer);
 
        $(this).attr('disabled','disabled');
        $('#tgCountupTimer #resetButton').removeAttr('disabled');
        $('#tgCountupTimer #startButton').removeAttr('disabled');
    });
 
 
    $('#tgCountupTimer #resetButton').click(function() {
 
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
 
        $('#tgCountupTimer .time').html('00:00:00:0');
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').attr('disabled');
        $('#tgCountupTimer #startButton').removeAttr('disabled','disabled');
    });
});
 
msec = 0;
sec  = 0;
min  = 0;
hour = 0;
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    msecNumber = msec;
 
    if (sec < 10) {
        secNumber = '0' + sec.toString();
    } else {
        secNumber = sec;
    }
 
    if (min < 10) {
        minNumber = '0' + min.toString();
    } else {
        minNumber = min;
    }
    
    if (hour < 10) {
        hourNumber = '0' + hour.toString();
    } else {
        hourNumber = hour;
    }
 
    $('#tgCountupTimer .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}