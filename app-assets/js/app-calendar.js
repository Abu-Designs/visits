/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Apex - Responsive Admin Theme
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {

  //-------------- Default --------------
  var calendarE1 = document.getElementById('fc-default');
  var fcdefault = new FullCalendar.Calendar(calendarE1, {
    defaultDate: '2019-06-12',
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    plugins: ["dayGrid", "interaction"],
    eventLimit: true, // allow "more" link when too many events
    events: [{
        title: 'All Day Event',
        start: '2019-06-01'
      },
      {
        title: 'Long Event',
        start: '2019-06-07',
        end: '2019-06-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2019-06-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2019-06-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-06-11',
        end: '2019-06-13'
      },
      {
        title: 'Meeting',
        start: '2019-06-12T10:30:00',
        end: '2019-06-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-06-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-06-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-06-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2019-06-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-06-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-06-28'
      }
    ]
  });
  fcdefault.render();


  //-------------- External Dragging --------------

  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendarInteraction.Draggable;
  var containerEl = document.getElementById('external-events');
  var calendarEl = document.getElementById('fc-external-drag');
  var checkbox = document.getElementById('drop-remove');

  // initialize the calendar
  var calendar = new Calendar(calendarEl, {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    editable: true,
    plugins: ["dayGrid", "timeGrid", "interaction"],
    droppable: true, // this allows things to be dropped onto the calendar
    defaultDate: '2019-10-01',
    events: [{
        title: 'All Day Event',
        start: '2019-10-01',
        color: '#7b2222'
      },
      {
        title: 'Long Event',
        start: '2019-10-07',
        end: '2019-10-10',
        color: '#40C057'
      },
      {
        id: 999,
        title: 'Meeting',
        start: '2019-10-09T16:00:00',
        color: '#2F8BE6'
      },
      {
        title: 'Birthday Party',
        start: '2019-10-13T07:00:00',
        color: '#F77E17'
      },
      {
        title: 'Conference Meeting',
        start: '2019-10-11',
        end: '2019-10-13',
        color: '#FCC173'
      },
      {
        id: 999,
        title: 'Happy Hour',
        start: '2019-10-16T16:00:00',
        color: '#BDBDBD'
      },
      {
        title: 'Meeting',
        start: '2019-10-12T10:30:00',
        end: '2019-10-12T12:30:00',
        color: '#2F8BE6'
      },
      {
        title: 'Party',
        start: '2019-10-12T20:00:00',
        color: '#465375'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-10-28',
        color: '#7b2222'
      }
    ],
    drop: function (info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    }
  });
  calendar.render()

  $('#external-events .fc-event').each(function () {
    // Different colors for events
    $(this).css({
      'backgroundColor': $(this).data('color'),
      'borderColor': $(this).data('color')
    });
  });

  var colorData;
  $('#external-events .fc-event').mousemove(function () {
    colorData = $(this).data('color');
  })
  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText,
        color: colorData
      };
    }
  });
});
