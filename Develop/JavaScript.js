// Array for all of the workload to save to localStorage
var workLoad = [
    {time: "0900", task:""},
    {time: "1000", task:""},
    {time: "1100", task:""},
    {time: "1200", task:""},
    {time: "1300", task:""},
    {time: "1400", task:""},
    {time: "1500", task:""},
    {time: "1600", task:""},
    {time: "1700", task:""},
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
    var sectionColour = timecolor(hourincrement);
    var sections = 
        '<div class ="task-info row" id="' + index + '"><div class="col-1 hour pt-4">' 
        + hourincrement + '</div><div class="col task"><textarea class="form-control ' 
        + sectionColour + '">' + block.task + '</textarea></div><button class="col-1 saveBtn d-flex justify-content-center align-items-center"><i class="mt-2 far fa-save fa-lg"></i></button></div>'

    $(".container").append(sections);
})

// Saves tasks to localstorage
var saved = function () {
    localStorage.setItem("tasks", JSON.stringify(workLoad))
}

// Colorful row changes
function timecolor(time) {
    var planNow = moment(horita, "H A");
    var planEntry = moment(time, "H A");
    console.log(planEntry);
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    } else if (planNow.isAfter(planEntry) === true) {
        return "past";
    } else {
        return "present";
    }
}
// Load tasks to localStorage

var loading = JSON.parse (localStorage.getItem("tasks"))
if (loading){
    workLoad=loading;
}