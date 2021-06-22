import React from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

const eventColors = {
  business: "bg-success",
  flatlogic: "bg-warning",
  personal: "bg-danger",
  holiday: "bg-primary"
};

class AddEvent extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date(),
    title: "",
    label: null,
    allDay: true,
    selectable: true,
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    })
  }

  handleEndDateChange = date => {
    this.setState({
      endDate: date
    })
  }

  handleLabelChange = label => {
    this.setState({
      label
    })
  }

  handleAddEvent = id => {
    this.props.handleSidebar(false)
    this.props.addEvent({
      id: id,
      title: this.state.title,
      start: this.state.startDate,
      end: this.state.endDate,
      label: this.state.label === null
        ? "others"
        : this.state.label,
      allDay: this.state.allDay,
      selectable: this.state.selectable,
    })
    this.setState({
      startDate: new Date(),
      endDate: new Date(),
      title: "",
      label: null,
      allDay: true,
      selectable: true
    })
  }

  // UNSAFE_componentWillReceiveProps

  render() {
    let events = this.props.events.map(i => i.id)
    let lastId = events.pop()
    let newEventId = lastId + 1
    return (
      <div className={`add-event-sidebar ${this.props.sidebar
        ? "show"
        : "hidden"
      }`}
      >
        <div className="header d-flex justify-content-between">
          <h3>
            {this.props.eventInfo !== null && this.props.eventInfo.title.length > 0
              ? "Update Event"
              : "Add Event"
            }
          </h3>
          <div
            className=""
            onClick={() => this.props.handleSidebar(false)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div className="add-event-body">
          <div className="category-action d-flex justify-content-between my-5">
            <div className="event-category">
              {this.state.label !== null
                ? (<div className={`chip ${eventColors[this.state.label]}`}>
                  <div className="chip-body">
                    <div className="chip-text text-capitalize">
                      {this.state.label}
                    </div>
                  </div>
                </div>)
                : null
              }
            </div>
            <div className="category-dropdown">
              <UncontrolledDropdown>
                <DropdownToggle tag="div" className="cursor-pointer">
                  <i className="fa fa-ticket" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu tag="ul" right>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("business")}
                  >
                    <span className="bullet bullet-success bullet-sm mr-50"></span>
                    <span>Business</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("work")}
                  >
                    <span className="bullet bullet-warning bullet-sm mr-50"></span>
                    <span>Flatlogic</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("personal")}
                  >
                    <span className="bullet bullet-danger bullet-sm mr-50"></span>
                    <span>Personal</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="li"
                    onClick={() => this.handleLabelChange("others")}
                  >
                    <span className="bullet bullet-primary bullet-sm mr-50"></span>
                    <span>Holiday</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="add-evend-fields mt-2">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  id="EventTitle"
                  placeholder="Event Title"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}
                />
                <Label for="EventTitle">Event Title</Label>
              </FormGroup>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Flatpickr
                  id="startDate"
                  className="form-control"
                  value={this.state.startDate}
                  onChange={date => this.handleDateChange(date)}
                  options={{altInput: true, altFormat: "F j, Y",dateFormat: "Y-m-d", }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Flatpickr
                  id="endDate"
                  className="form-control"
                  value={this.state.endDate}
                  onChange={date => this.handleEndDateChange(date)}
                  options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                />
              </FormGroup>
            </div>
            <hr className="my-2" />
            <div className="add-event-actions text-right">
              <Button
                disabled={this.state.title.length > 0 ? false : true}
                color="primary"
                onClick={() => {
                  this.props.handleSidebar(false)
                  if (
                    this.props.eventInfo === null ||
                    this.props.eventInfo.title.length <= 0
                  )
                    this.handleAddEvent(newEventId)
                  else
                    this.props.updateEvent({
                      id: this.props.eventInfo.id,
                      title: this.state.title,
                      label: this.state.label,
                      start: this.state.startDate,
                      end: this.state.endDate,
                      allDay: true,
                      selectable: true
                    })
                }}
              >
                {this.props.eventInfo !== null &&
                this.props.eventInfo.title.length > 0
                  ? "Update Event"
                  : "Add Event"
                }
              </Button>
              <Button
                className="ml-1"
                color="flat-danger"
                onClick={() => {
                  this.props.handleSidebar(false)
                  if (this.props.handleSelectedEvent)
                    this.props.handleSelectedEvent(null)
                  else
                    return null
                }}
              >
                Cancel
              </Button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AddEvent;
