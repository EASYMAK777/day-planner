

//get data for the header date
var m = moment();
var currentDay = m.format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);
//set up time block
var mySchedule = [
    {
        id:"0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id:"0",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id:"0",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },     
    {
        id:"0",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id:"0",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id:"0",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id:"0",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    
]


//saves data to local storage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

//sets any data in localStorage to the view
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $("#${_thisHour.id}").val(_thisHour.reminder);
    })
}

