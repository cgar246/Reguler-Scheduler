// array for all of the time frames of tasks and the workload
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
var tasks = moment(); 
$("#currentDay").text(today.format("MM/DD/YYYY"))