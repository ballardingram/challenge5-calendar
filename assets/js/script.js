// FUNCTION > SETS CURRENT DATE
// DOCUMENTATION > NOW DAYJS (https://day.js.org/docs/en/parse/now)
//const now = new Date ();
//const Date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//document.getElementById("todaysDate").innerHTML = date;

// FUNCTION > TIME OF DAY STYLE INDICATOR - CHANGES TASK APPEARANCE TO REFLECT OVERDUE (PAST), CURRENT (PRESENT), AND UPCOMING(FUTURE)
const hourIndicator = function() {
    const currentTime = moment().hour()
    for ( const i = 7; i < 19; i++) {
        const taskCard = $("#task-" +i)
        if(currentTime > i) {
            $(taskCard).addClass("past");
        } else if (currentTime === i) {
            $(taskCard).addClass("present");
        } else if (currentTime === i) {
            $(taskCard).addClass("future")
        }
    }
};

// FUNCTIONS > TASK ARRAY
tasks = [];

// FUNCTION > LOAD TASKS
const loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks) {
        tasks = {};
    };
    printTasks(tasks)
}

// FUNCTION > PRINT TASKS
const printTasks = function() {
    $.each(tasks, function(list, arr) {
        const taskBlock = $("<p>").addClass("taskCard taskNumber" + list).text(arr)
        $("#task-number-" +list).replaceWith(taskBlock);
    })
};