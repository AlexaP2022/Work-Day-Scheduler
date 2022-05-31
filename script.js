var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");


//display current day using moment.js in jumbotron
currentDay.text(moment().format("dddd, MMMM Do YYYY"));

//event listener for save button to save entered appointments and time to local storage
saveBtn.on("click", function(){
    var appointment = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, appointment);    
    })
   
//hour tracker function to compare current hour to given blockhours on the schedule then assign past, present future classes  depending on outcome
function hourTracker () {
    var currentHour = moment().hour(); // using moment.js to assess current hour
    console.log(currentHour); // hour is in military time 2PM = 14; changed time block div IDs accordingly

    timeBlock.each(function (){
        var blockHour = $(this).attr("id"); // blockHour is denoted by assigned ids per HTML
        console.log(currentHour, blockHour)
        console.log(typeof(currentHour)) // currentHour is a number
        console.log(typeof(blockHour)) // blockhour is a string
        console.log(this)

        if(blockHour == currentHour) { //returns true even though values are of different types (string vs. number)
            $(this).addClass('present');
        }else if (blockHour > currentHour) {
            $(this).addClass('future');
        } else  { //if blockHour is less than currentHour
            $(this).addClass('past');
        }

        })

} 
hourTracker();    

function keepApptsfrmLocal() {
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}
keepApptsfrmLocal();

    

     