//create Save button
$(".saveButton").on("click", function(event){
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    
})
//function to save reminder data//

function saveReminders() {
    localStorage.setItem("myday",JSON.stringify(myDay));
}




//make object for my Day//

var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    
    
]



//use moment.js to get header date//
const m = moment();

function getTodaysDate() {
    var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#todaysDate").text(todaysDate);

    console.log(todaysDate);
}

getTodaysDate();





//load the header date//
//sets any data in local storage for viewing//
//set any existing local storage data to view if already saved//








