var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var locked = [];
var currentDate = new Date();
var currentDay = currentDate.getDay();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var actualDate = currentDate.getDate();
currentMonth = Months[currentMonth];
currentDay = Days[currentDay];
if (actualDate == 1 || actualDate == 21 || actualDate == 31){
    actualDate = actualDate + "st";
}
else if (actualDate == 2 || actualDate == 22){
    actualDate = actualDate + "nd";
}
else if(actualDate == 3 || actualDate == 23){
    actualDate = actualDate + "rd";
}
else{
    actualDate = actualDate + "th";
}
var message = currentDay + ", " + currentMonth + " " + actualDate + " " + currentYear;
var todayDate = document.querySelector(".leadDate");
todayDate.textContent = message;
$(".timeHighLight").each(function(){
    var currentTime = new Date();
    var currentHour = currentTime.getHours(); 
    // if (currentHour>12){
    //     currentHour -= 12;
    // }
    var wholeHour = $(this).attr("data-hour");
    wholeHour = parseInt(wholeHour);
    if (currentHour === wholeHour){
        $(this).addClass("present");
    }
    if (currentHour > wholeHour){
        $(this).addClass("past");
    }
    if (currentHour < wholeHour){
        $(this).addClass("future");
    }
});
var messageCounter = 0;
$('.iconsBtn').on('click', function(event){
        var textAreas = document.querySelectorAll(".description");
        event.preventDefault();
        var saveId = $(this).attr("data-hour");
       var idTask = $("#data-hour-" + saveId).attr("id");
        var messageObj = {
            idCounter:idTask,
            hourlyTask:textAreas[saveId-8].value
        }
        if (messageObj.hourlyTask){
            locked.push(messageObj);
            localStorage.setItem('task2Do', JSON.stringify(locked));
            messageCounter++;
        }
            
 });

 var loadTasks = function(){
     if (localStorage.getItem("task2Do")){
        var messages = (JSON.parse(localStorage.getItem("task2Do")));
        console.log(messages);
        locked = messages;
        for (var i = 0; i < locked.length; i++) {
               var taskDescription = locked[i].hourlyTask;
               var taskId = locked[i].idCounter;
               console.log(taskDescription);
                var messageHour = $("#" + taskId);
                messageHour.val(taskDescription);
        
            } 

     }
 
 }
 loadTasks();

        