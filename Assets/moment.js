
//make variables:
var hour = moment().format("H")
var button = $(".saveBtn") 

var moment = moment();
var currentDay = moment.format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);

//make on clicks

button.on("click", function () {
    console.log("hit")
    var userInput = $(this).siblings(".description").val();
        var mainRow = $(this).parent().attr("id");
        localStorage.setItem(mainRow, userInput)
});

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))



function getSetColors() {
    $(".time-block").each(function () {
        var divId = $(this).attr("id")
        var divTime = parseInt(divId);
        if(divTime < hour) {
            $(this).children(".description").attr("class", "col-md-10 description past");
        } else if (divTime == hour) {
            $(this).children(".description").attr("class", "col-md-10 description present");
        } else {
            $(this).children(".description").attr("class", "col-md-10 description future");
        };
    });

};

getSetColors()

function setTimeInterval() {
    window.setInterval(getSetColors, 3000);
};

setTimeInterval();