// Array for all of the workload to save to localStorage
var workLoad = [
    {time: "09:00 am", task:""},
    {time: "10:00 am", task:""},
    {time: "11:00 am", task:""},
    {time: "12:00 pm", task:""},
    {time: "1:00 pm", task:""},
    {time: "2:00 pm", task:""},
    {time: "3:00 pm", task:""},
    {time: "4:00 pm", task:""},
    {time: "5:00 pm", task:""},
];

// Will set the date
var hora = moment(); 
$("#currentDay").text(hora.format("MMMM DD, YYYY"));

var horita = moment();



// Creating tasks
workLoad.forEach(function(block, index){
    var hourincrement = block.time;
    var sectionColour = timecolor(hourincrement);
    var sections = 
        '<div class ="task-info row" id="' + index + '"><div class="col-1 hour pt-4">' 
        + hourincrement + '</div><div class="col task"><textarea class="form-control ' 
        + sectionColour + '">' + block.task + '</textarea></div><button class="col-1 saveBtn d-flex justify-content-center align-items-center"><i class="mt-2 far fa-save fa-lg"></i></button></div>'

    $(".container").append(sections);
});


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
};

// Load tasks to localStorage
var loading = JSON.parse(localStorage.getItem("tasks"));
if (loading) {
    workLoad = loading;
}

// Saves tasks to localstorage
var saved = function () {
    localStorage.setItem("tasks", JSON.stringify(workLoad));
};

// Save button functionalities
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var blockedoff = parseInt(
        $(this)
            .closest(".task-info")
            .attr("id")
    )
    var Input = $.trim(
        $(this)
            .parent()
            .find("textarea")
            .val()
    )
    workLoad[blockedoff].task = Input;
    saved();
});
