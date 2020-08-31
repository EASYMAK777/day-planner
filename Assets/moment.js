//function to save reminder data//

function saveReminders() {
    localStorage.setItem("myday",JSON.stringify(myDay));
}









$(".saveButton").on("click", function(event){
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})