

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

