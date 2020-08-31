//create Save buttons
$(".saveButton").on("click", function(event){
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myTasks[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    
})
//function to save reminder data//

function saveReminders() {
    localStorage.setItem("myday",JSON.stringify(myDay));
}




//make object for my Day//

var myTasks = [
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

//load the header date//
getTodaysDate();






//sets any data in local storage for viewing//
function saveTasks() {
    localStorage.setItem("myTasks",JSON.stringify(myTasks));
}




//set any existing local storage data to view if already saved//








