// Array for all of the workload to save to localStorage
var workLoad = [
    {time: "0900", task:""},
    {time: "1000", task:""},
    {time: "1100", task:""},
    {time: "1200", task:""},
    {time: "0100", task:""},
    {time: "0200", task:""},
    {time: "0300", task:""},
    {time: "0400", task:""},
    {time: "0500", task:""},
];

// Will set the date
var hora = moment(); 
$("#currentDay").text(hora.format("MM/DD/YYYY"));

var horita = moment();

// Save button functionalities
$(".savetask").on("click", function (event) {
    event.preventDefault();
    var blockedoff = parseInt(
        $(this)
            .closest(".task")
            .attr("id")
    )
    var Input = $.trim(
        $(this)
            .parent()
            .find("texthere")
            .val()
    )
    workLoad[blockedoff].task = Input;
    saved();
})

// Creating tasks
workLoad.forEach(function(block, index){
    var hourincrement = block.time;
    var sectionColour = timecolor(hourincrement)
})

// Saves tasks to localstorage
var saved = function () {
    localStorage.setItem("tasks", JSON.stringify(workLoad))
}

// Colorful row changes

// Load tasks to localStorage

var loading = JSON.parse (localStorage.getItem("tasks"))
if (loading){
    workLoad=loading;
}