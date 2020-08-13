

//create variables to set up moment.js
var time = moment().format("H")
var button = $(".saveBtn") 

var moment = moment();
var currentDay = moment.format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);

var moment = moment();
var currentDay = moment.format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);

//Create onclick events for storage

button.on("click", function () {
    console.log("hit")
    var userInput = $(this).siblings(".description").val();
        var mainRow = $(this).parent().attr("id");
        localStorage.setItem(mainRow, userInput)
});

//pulls tasks from local storage

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

//this function changes color according to the current hour

function getColors() {
    $(".time-block").each(function () {
        var divId = $(this).attr("id")
        var divTime = parseInt(divId);
        if(divTime < time) {
            $(this).children(".description").attr("class", "col-md-10 description past");
        } else if (divTime == time) {
            $(this).children(".description").attr("class", "col-md-10 description present");
        } else {
            $(this).children(".description").attr("class", "col-md-10 description future");
        };
    });

};

getColors()

function setTimeInterval() {
    window.setInterval(getColors, 3000);
};

setTimeInterval();