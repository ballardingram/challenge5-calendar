// FUNCTION > SETS CURRENT DATE
// DOCUMENTATION > NOW DAYJS (https://day.js.org/docs/en/parse/now)
// DOCUMENATION > CURRENT TIME (https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript)
// NOTE > THIS CODE WAS PUSHED TO GITHUB AS A PART OF THE HTML FOR TESTING, THEN MOVED TO SCRIPT.JS
const today = new Date();
            const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            const dateTime = date + ' ' + time;
            document.getElementById("CurrentDate").innerHTML = dateTime;

// FUNCTION > TIME OF DAY STYLE INDICATOR - CHANGES TASK APPEARANCE TO REFLECT OVERDUE (PAST), CURRENT (PRESENT), AND UPCOMING(FUTURE)
const hourIndicator = function() {
    const today = new Date();
    const currentTime = today.getHours();
    for ( const i = 7; i < 19; i++) {
        const taskCard = $("#time-" +i)
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