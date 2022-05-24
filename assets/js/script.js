// FUNCTIONS > NOTES ARRAY
notes = [];

// FUNCTION > LOAD NOTES
const loadNotes = function() {
    notes = JSON.parse(localStorage.getItem("notes"))
    if(!notes) {
        notes = {};
    };
    printNotes(notes)
}

// FUNCTION > PRINT NOTES
const printNotes = function() {
  $.each(notes, function(list, arr) {
      const notesBlock = $("<p>").addClass("description note-detail-" + list).text(arr)
      $("#note-detail" +list).replaceWith(notesBlock);
  })
};

// FUNCTION > UPDATE NOTE
$(".noteBlock").on("click", "p", function() {
const text = $(this)
.text()
.trim();
const noteInput = $("<textarea")
.addClass("note-detail")
.val(text);
$(this).replaceWith(noteInput);
noteInput.trigger("focus");
});



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
    const currentTime = moment().hour()
    for ( const i = 7; i < 19; i++) {
        const noteCard = $("#note-" +i)
        if(currentTime > i) {
            $(noteCard).addClass("past");
        } else if (currentTime === i) {
            $(noteCard).addClass("present");
        } else if (currentTime === i) {
            $(noteCard).addClass("future")
        }
    }
};

// FUNCTIONS > LOAD NOTES AND HOUR INDICATOR FOR TIME
loadNotes();
hourIndicator();