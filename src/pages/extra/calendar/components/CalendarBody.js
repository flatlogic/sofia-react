// ** React Import
import { useEffect, useRef, memo, Fragment } from "react";
// ** Full Calendar & It's Plugins
import FullCalendar from "@fullcalendar/react"
import listPlugin from "@fullcalendar/list"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactinPlugin from "@fullcalendar/interaction"

// ** Third Party Components
import { toast } from "react-toastify"
import { Card, CardBody } from "reactstrap";

const CalendarBody = props => {
  // ** Refs
  const calendarRef = useRef(null)
  // ** Props
  const {
    store,
    dispatch,
    calendarApi,
    setCalendarApi,
    blankEvent,
    selectEvent,
    updateEvent
  } = props

  // ** UseEffect checks for CalendarAPI Update
  useEffect(() => {
    if (calendarApi === null) {
      setCalendarApi(calendarRef.current.getApi())
    }
  }, [calendarApi])

  // ** CalendarOptions(Props)
  const calendarOptions = {
    events: store.events.length
      ? store.events
      : [],
    plugins: [interactinPlugin, dayGridPlugin, timeGridPlugin],
    initialValue: 'dayGridMonth',
    headerToolbar: {
      start: 'sidebarToggle, prev, next, title',
      end: 'dayGridMonth, timeGridWeek, timeGridDay'
    },
    // Determines whether the events on the calendar can be modified.
    // Docs: https://fullcalendar.io/docs/editable
    editable: true,
    // Enable resizing event from start
    // Docs: https://fullcalendar.io/docs/eventResizableFromStart
    eventResizableFromStart: true,
    // Automatically scroll the scroll-containers during event drag-and-drop and date selecting
    // Docs: https://fullcalendar.io/docs/dragScroll
    dragScroll: true,
    // Max number of events within a given say
    // Docs: https://fullcalendar.io/docs/dayMaxEvents
    dayMaxEvents: 2,
    // Derermines if day names and week names are clickable
    // Docs: https://fullcalendar.io/docs/navLinks
    navLinks: true,
    // Triggered when the user clicks an event.
    // Docs: https://fullcalendar.io/docs/eventClick
        // eventClick({ event: clickedEvent }) {
        //   dispatch(selectEvent(clickedEvent))
        //   handleAddEventSidebar()
        // }
    ref: calendarRef,
  }

  return (
    <Card className="shadow-none border-0 mb-0 rounded-0">
      <CardBody className="pb-0">
        <FullCalendar {...calendarOptions} />{' '}
      </CardBody>
    </Card>
  )
}

export default memo(CalendarBody)

