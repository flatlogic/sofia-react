import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import ReactMde from "react-mde";
import MarkdownIt from "markdown-it";
import taskLists from "markdown-it-task-lists";
import DOMPurify from "dompurify";
import Select from "react-select";
import DatePicker from "react-datepicker";
import ColorPicker from 'rc-color-picker';
import MaskedInput from "react-maskedinput";
import { useDropzone } from 'react-dropzone';


import 'rc-color-picker/assets/index.css';
import "react-mde/lib/styles/css/react-mde-all.css";
import "react-datepicker/dist/react-datepicker.css";

import Widget from "../../../components/Widget/Widget";
import s from "./Elements.module.scss";

export default function Elements() {

  const converter = new MarkdownIt({ html: true, linkify: true }).use(taskLists);

  const state = {
    selectDefaultData: [
      { value: 'Drama', label: 'Better Call Saul', rating: '18' },
      { value: 'Space Western', label: 'The Mandalorian', rating: '14' },
      { value: 'Comedy', label: 'Parks and Recreation', rating: '16' },
    ],
    selectGroupData: [
      {
        label: 'NFC NORTH',
        options: [
          { value: 'Chicago-Bears', label: 'Chicago Bears', rating: 'safe' },
          { value: 'Detroit-Lions', label: 'Detroit Lions', rating: 'good' },
          { value: 'Green-Bay-Packers', label: 'Green Bay Packers', rating: 'wild' },
        ],
      },
      {
        label: 'NFC SOUTH',
        options: [
          { value: 'Atlanta-Falcons', label: 'Atlanta Falcons', rating: 'safe' },
          { value: 'Carolina-Panthers', label: 'Carolina Panthers', rating: 'good' },
          { value: 'New-Orleans-Saints', label: 'New Orleans Saints', rating: 'wild' },
        ],
      },
    ],
  }

  const [markdownValue, setMarkdownValue] = React.useState("**Hello world!!!**");
  const [selectedMarkdownTab, setSelectedMarkdownTab] = React.useState("write");

  const [dropdownValue, setDropdownValue] = useState('Another Value')

  const [checkboxes, setCheckboxes] = useState([true, true, true, true, true, true, true, true])
  const [simpleDropdownValue, setSimpleDropdownValue] = useState('Option One')
  const [blueDropdownValue, setBlueDropdownValue] = useState('Ichi')
  const [violetDropdownValue, setVioletDropdownValue] = useState('Hichi')
  const [darkDropdownValue, setDarkDropdownValue] = useState('Achi')
  const [startDate, setStartDate] = useState(new Date());
  const [color, setColor] = useState("#FF5668");
  const [inputColor, setInputColor] = useState("#FF5668");
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  const changeSelectDropdownSimple = (e) => {
    setSimpleDropdownValue(e.currentTarget.textContent)
  }

  const changeBlueDropdown = (e) => {
    setBlueDropdownValue(e.currentTarget.textContent)
  }

  const changeVioletDropdown = (e) => {
    setVioletDropdownValue(e.currentTarget.textContent)
  }

  const changeDarkDropdown = (e) => {
    setDarkDropdownValue(e.currentTarget.textContent)
  }

  const changeCheck = (e, checkbox, id) => {
    checkboxes[id] = e.target.checked;

    if (!e.target.checked) {
      checkboxes[id] = false;
    }
    setCheckboxes({
      checkboxes
    });
  }

  const changeColorValue = (colors) => {
    setColor(colors.color)
  }

  const changeColorInput = (e) => {
    if (e.target.value.length > 0 && e.target.value.length < 8) {
      setInputColor(e.target.value)
      setColor(e.target.value)
    }
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Inputs</div>
                <FormGroup>
                  <Form>
                    <legend className="mt-2">Horizontal form</legend>
                    <FormGroup row>
                      <Label md={3} for="normal-field" className="text-md-right">Normal field</Label>
                      <Col md={9}>
                        <Input type="text" id="normal-field" placeholder="May have placeholder"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="hint-field" className="d-flex flex-column text-md-right">
                        Label hint
                        <span className="label muted">Some help text</span>
                      </Label>
                      <Col md={9}>
                        <Input type="text" name="password" id="hint-field"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="tooltip-enabled" className="text-md-right">Tooltip Enabled</Label>
                      <Col md={9}>
                        <Input type="text" id="tooltip-enabled" placeholder="Hover on me..."/>
                        <UncontrolledTooltip target="tooltip-enabled" placement="top">Some explanation text here</UncontrolledTooltip>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="disabled-input" className="text-md-right">Disabled input</Label>
                      <Col md={9}>
                        <Input
                          type="text" id="disabled-input"
                          disabled="disabled" value="Default value"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="max-length">Max length</Label>
                      <Col md={9}>
                        <Input
                          type="text" id="max-length" maxLength="3"
                          placeholder="Max length 3 characters"
                        />
                        <UncontrolledTooltip placement="top" target="max-length">
                          You cannot write more than 3 symbols.
                        </UncontrolledTooltip>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="prepended-input">Prepended input</Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-user" /></span></InputGroupAddon>
                          <Input id="prepended-input" type="test" bsSize="16" placeholder="Username" />
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="password-field">Password</Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-lock" /></span></InputGroupAddon>
                          <Input
                            id="password-field" type="password"
                            placeholder="Password"
                          />
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="appended-input">Appended input</Label>
                      <Col md={9}>
                        <InputGroup>
                          <Input id="appended-input" bsSize="16" type="text" />
                          <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="combined-input">
                        Combined
                      </Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input id="combined-input" bsSize="16" type="text" />
                          <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-0">
                      <Label md={3} className="text-md-right" for="transparent-input">
                        Append Transparent
                      </Label>
                      <Col md={9}>
                        <InputGroup className="input-group-transparent">
                          <Input id="transparent-input" type="text" />
                          <InputGroupAddon addonType="append"><span className="input-group-text"><i className="fa fa-camera" /></span></InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} />
                      <Col md={9}>
                        <Button color="primary" type="submit" className="mr-3 mt-3">Save Changes</Button>
                        <Button color="default" className="mt-3">Cancel</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </FormGroup>
              </Widget>
            </Col>
            <Col xs={12} lg={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Prepended And Appended Inputs</div>
                <FormGroup>
                  <Form>
                    <legend className="mt-2">Default form</legend>
                    <Row className="pl-0 pl-md-4">
                      <Col md={10}>
                        <FormGroup>
                          <Label for="search-input1">
                            Search type input
                          </Label>
                          <InputGroup>
                            <Input type="text" id="search-input1" />
                            <InputGroupAddon addonType="append">
                              <Button color="default">Search</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="bar">
                            Whole bar appended
                          </Label>
                          <InputGroup>
                            <Input type="text" id="bar" />
                            <InputGroupAddon addonType="append">
                              <ButtonGroup>
                                <Button color="secondary-red" className="px-3 border-radius-0"><i className={`fa fa-pencil ${s.btnIcon}`} /></Button>
                                <Button color="secondary-yellow" className="px-3"><i className={`fa fa-plus ${s.btnIcon}`} /></Button>
                                <Button color="success" className="px-3"><i className={`fa fa-refresh ${s.btnIcon}`} /></Button>
                              </ButtonGroup>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="dropdown-appended">
                            Actions dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="dropdown-appended" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <DropdownToggle caret color="success" className="border-radius-left-0">
                                  Action
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem>Action</DropdownItem>
                                  <DropdownItem>Another action</DropdownItem>
                                  <DropdownItem>Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Separated link</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="segmented-dropdown">
                            Segmented dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="segmented-dropdown" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <Button color="warning" className="border-radius-left-0 px-3">Action</Button>
                                <DropdownToggle
                                  caret color="warning"
                                  className="dropdown-toggle-split opacity-75 px-3"
                                />
                                <DropdownMenu>
                                  <DropdownItem>Action</DropdownItem>
                                  <DropdownItem>Another action</DropdownItem>
                                  <DropdownItem>Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Separated link</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="label muted">Anything can be appended to the right</span>
                        </FormGroup>
                        <FormGroup>
                          <Label for="type-dropdown-appended">
                            Types dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="type-dropdown-appended" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <DropdownToggle
                                  caret color="primary"
                                  className="px-3 dropdown-toggle-split border-radius-left-0"
                                >
                                  {dropdownValue}
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem >
                                    Another type
                                  </DropdownItem>
                                  <DropdownItem >
                                    Type one
                                  </DropdownItem>
                                  <DropdownItem >
                                    Next type
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="label muted">
                            You can select some type of a field just right in the place.
                          </span>

                        {/*  <FormGroup>*/}
                        {/*    <UncontrolledButtonDropdown>*/}
                        {/*      <DropdownToggle caret>*/}
                        {/*        Dropdown*/}
                        {/*      </DropdownToggle>*/}
                        {/*      <DropdownMenu>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem divider />*/}
                        {/*        <DropdownItem>Another Action</DropdownItem>*/}
                        {/*      </DropdownMenu>*/}
                        {/*    </UncontrolledButtonDropdown>*/}
                        {/*  </FormGroup>*/}


                        </FormGroup>
                        <FormGroup className="mb-1">
                          <Label for="no-borders-input">
                            Transparent input
                          </Label>
                          <Input
                            type="text" placeholder="Search Dashboard" id="no-borders-input"
                            className="no-border bg-light-gray"
                          />
                          <span className="label muted">
                            With <code>.bg-gray-lighter</code>. White by default.
                          </span>
                        </FormGroup>
                        <FormGroup row>
                          <Col>
                            <Button color="primary" type="submit" className="mr-3 mt-3">Save Changes</Button>
                            <Button color="default" className="mt-3">Cancel</Button>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </FormGroup>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Pickers</div>
                <legend className="mt-2">Date & Time</legend>
                <Row>
                  <Col md="6">
                    <div className="mb-2">Date Picker</div>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      isClearable
                      placeholderText="I have been cleared!"
                    />
                  </Col>
                  <Col md="6">
                    <div className="mb-2">Time Picker</div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="hh:mm"
                      isClearable
                      placeholderText="I have been cleared!"
                    />
                  </Col>
                </Row>
                <legend className="mt-5">Colors</legend>
                <Row>
                  <Col>
                    <Form>
                      <FormGroup>
                        <Label for="colorpicker">
                          Simple select
                          <InputGroup id="colorpicker">
                            <Input
                              type="text" onChange={(e) => changeColorInput(e)} id="colorpicker"
                              value={inputColor}
                            />
                            <InputGroupAddon addonType="append">
                              <span className="input-group-text">
                                <ColorPicker
                                  animation="slide-up"
                                  color={color}
                                  onChange={changeColorValue}
                                />
                              </span>
                            </InputGroupAddon>
                          </InputGroup>
                        </Label>
                      </FormGroup>

                    </Form>
                  </Col>
                </Row>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Input masks</div>
                <legend className="mt-2">Masked Inputs</legend>
                <FormGroup row>
                  <Label md="4" xs="12" className="d-flex flex-column" for="mask-phone">
                    Phone
                    <span className="label muted">(123) 456-7890</span>
                  </Label>
                  <Col md="8" xs="12">
                    <MaskedInput
                      className="form-control"
                      id="mask-phone"
                      mask="(111) 111-1111"
                      size="10"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" className="d-flex flex-column" for="mask-int-phone">
                    International Phone
                    <span className="label muted">+972 123 456 789</span>
                  </Label>
                  <Col md="8" xs="12">
                    <MaskedInput
                      className="form-control"
                      id="mask-int-phone"
                      mask="+111 111 111 111"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" className="d-flex flex-column" for="mask-date">
                    Date Format
                    <span className="label muted">07-06-2021</span>
                  </Label>
                  <Col md="8" xs="12">
                    <MaskedInput
                      className="form-control"
                      id="mask-date"
                      mask="11-11-1111"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" className="d-flex flex-column" for="mask-time">
                    Time
                    <span className="label muted">19:45</span>
                  </Label>
                  <Col md="8" xs="12">
                    <MaskedInput
                      className="form-control"
                      id="mask-time"
                      mask="11:11"
                    />
                  </Col>
                </FormGroup>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Textareas</div>
                <Form>
                  <legend className="mt-2">Kinds of textareas</legend>
                  <FormGroup row>
                    <Label md={3} className="text-md-right" for="default-textarea">Default textarea</Label>
                    <Col md={9}>
                      <Input rows="4" type="textarea" name="text" id="default-textarea" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={3} className="text-md-right" for="elastic-textarea">Auto-growing textarea</Label>
                    <Col md={9}>
                      <TextareaAutosize
                        minRows={3}
                        rows={4}
                        defaultValue="Just a single line..."
                        className={`form-control ${s.elasticTextarea} transition-height`}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={3} className="text-md-right" for="markdown-editor">Markdown Editor</Label>
                    <Col md={9}>
                      <ReactMde
                        value={markdownValue}
                        onChange={setMarkdownValue}
                        selectedTab={selectedMarkdownTab}
                        onTabChange={setSelectedMarkdownTab}
                        generateMarkdownPreview={(markdown) =>
                          Promise.resolve(DOMPurify.sanitize(converter.render(markdown)))
                        }
                        childProps={{
                          writeButton: {
                            tabIndex: -1
                          }
                        }}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Selects</div>
                <Form>
                  <legend className="mt-2">Default form with labels on left</legend>
                  <FormGroup row>
                    <Label md="4" for="default-select">Default Select</Label>
                    <Col md="8" className={s.select}>
                      <Select
                        options={state.selectDefaultData}
                        defaultValue={state.selectDefaultData[0]}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md="4" for="grouped-select">Select with search & groups</Label>
                    <Col md="8" className={s.select}>
                      <Select
                        options={state.selectGroupData}
                      />
                    </Col>
                  </FormGroup>
                </Form>
                <Form className="mt-4">
                  <legend className="mt-2">Dropdown based colored selects</legend>
                  <FormGroup row>
                    <Label className="align-self-baseline" md="4" for="simple-select">Simple select</Label>
                    <Col md="8">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          caret color="primary"
                        >
                          {simpleDropdownValue}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={changeSelectDropdownSimple}>
                            Option One
                          </DropdownItem>
                          <DropdownItem onClick={changeSelectDropdownSimple}>
                            Option Two
                          </DropdownItem>
                          <DropdownItem onClick={changeSelectDropdownSimple}>
                            Option Three
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <span className={`label muted ${s.helpBlock}`}>Auto resizing buttons</span>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md="4" for="simple-group-select">
                      Colored ones
                      <span className={`label muted ${s.helpBlock}`}>A bit of Japanese style</span>
                    </Label>
                    <Col md="8">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          caret color="info"
                          className="mr-3 mb-3"
                        >
                          {blueDropdownValue}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={changeBlueDropdown}>
                            Ichi
                          </DropdownItem>
                          <DropdownItem onClick={changeBlueDropdown}>
                            Ni
                          </DropdownItem>
                          <DropdownItem onClick={changeBlueDropdown}>
                            San
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          caret color="primary"
                          className="mr-3 mb-3"
                        >
                          {violetDropdownValue}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={changeVioletDropdown}>
                            Ichi
                          </DropdownItem>
                          <DropdownItem onClick={changeVioletDropdown}>
                            Ni
                          </DropdownItem>
                          <DropdownItem onClick={changeVioletDropdown}>
                            San
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          caret color="default"
                          className="mr-3 mb-3"
                        >
                          {darkDropdownValue}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={changeDarkDropdown}>
                            Ichi
                          </DropdownItem>
                          <DropdownItem onClick={changeDarkDropdown}>
                            Ni
                          </DropdownItem>
                          <DropdownItem onClick={changeDarkDropdown}>
                            San
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md="4" for="big-select">
                      Big Select
                      <span className={`label muted ${s.helpBlock}`}>
                        Size can be controlled with <code>size=&apos;lg&apos;</code> & <code>size=&apos;sm&apos;</code>
                      </span>
                    </Label>
                    <Col md="8">
                      <UncontrolledButtonDropdown id="big-select">
                        <DropdownToggle caret outline color="secondary" size="lg">
                          <span className="mr-5">Big Item</span>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            Big Item
                          </DropdownItem>
                          <DropdownItem>
                            Big Item
                          </DropdownItem>
                          <DropdownItem>
                            Big Item
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </Col>
                  </FormGroup>
                </Form>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Form Options</div>
                <Form>
                  <legend className="mt-2">Control sizing</legend>
                  <div className="mb-3 body-3 muted">
                    Set input heights using parameters like <code>size=&apos;lg&apos;</code> and
                    <code>size=&apos;sm&apos;</code>.
                    Also works with <code>type=&apos;search&apos;</code> inputs, input groups and
                    selects.
                  </div>
                  <FormGroup>
                    <Input type="text" placeholder='bsSize="lg"' bsSize="lg" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="default input" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder='bsSize="sm"' bsSize="sm" />
                  </FormGroup>
                </Form>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Form Options</div>
                <Form>
                  <legend className="mt-2">Input Groups</legend>
                  <div className="mb-3 body-3 muted">
                    Different colors & sizes for any elements including input groups. Elements may be
                    easily styled with classes like <code>.bg-middle-gray</code> or
                    <code>.bg-transparent</code>
                  </div>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text"><i className="fa fa-github"></i></span>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Login" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text"><i className="fa fa-eye-slash"></i></span>
                      </InputGroupAddon>
                      <Input className="bg-light-gray" type="password" placeholder="Password" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <Input type="text" placeholder="Phone" />
                      <InputGroupAddon addonType="prepend">
                        <span className="bg-primary text-white input-group-text"><i className="fa fa-phone" /></span>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Checkbox Controls</div>
                <div className="mb-3 body-3 muted">
                  We customized checkboxes with our theme colors. Let your checkboxes shine!
                </div>
                <FormGroup className="pl-0" check>
                  <div className="form-check checkbox checkbox-default">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[0]}
                      onChange={(e) => changeCheck(e, "checkboxes", 0)}
                    />
                    <label htmlFor="checkbox1">Default Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-primary">
                    <input
                      id="checkbox2"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[1]}
                      onChange={(e) => changeCheck(e, "checkboxes", 1)}
                    />
                    <label htmlFor="checkbox2">Primary Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-info">
                    <input
                      id="checkbox3"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[2]}
                      onChange={(e) => changeCheck(e, "checkboxes", 2)}
                    />
                    <label htmlFor="checkbox3">Secondary Yellow Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-success">
                    <input
                      id="checkbox4"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[3]}
                      onChange={(e) => changeCheck(e, "checkboxes", 3)}
                    />
                    <label htmlFor="checkbox4">Success Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-warning">
                    <input
                      id="checkbox5"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[4]}
                      onChange={(e) => changeCheck(e, "checkboxes", 4)}
                    />
                    <label htmlFor="checkbox5">Warning Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-danger">
                    <input
                      id="checkbox6"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[5]}
                      onChange={(e) => changeCheck(e, "checkboxes", 5)}
                    />
                    <label htmlFor="checkbox6">Danger Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-secondary-red">
                    <input
                      id="checkbox7"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[6]}
                      onChange={(e) => changeCheck(e, "checkboxes", 6)}
                    />
                    <label htmlFor="checkbox7">Secondary Red Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-secondary-yellow">
                    <input
                      id="checkbox8"
                      type="checkbox"
                      className="styled"
                      checked={checkboxes[7]}
                      onChange={(e) => changeCheck(e, "checkboxes", 7)}
                    />
                    <label htmlFor="checkbox8">Secondary Yellow Checkbox</label>
                  </div>
                  <div className="form-check checkbox checkbox-info">
                    <input
                      id="checkbox9"
                      type="checkbox"
                      className="styled"
                      disabled
                    />
                    <label htmlFor="checkbox9">Disabled Checkbox</label>
                  </div>
                </FormGroup>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Radio Controls</div>
                <div className="mb-3 body-3 muted">
                  Supports bootstrap brand colors: <code>.abc-radio-primary</code>, <code>.abc-radio-danger</code>
                  etc.
                  Pure css solution with no javascript. Let your radios shine! Disabled state also supported.
                  Full stack radios functionality.
                </div>
                <Form>
                  <Row>
                    <Col lg="12">
                      <Row>
                        <Col md="4">
                          <FormGroup className="radio abc-radio">
                            <Input
                              type="radio" name="radio1" id="radio1" value="option1"
                              defaultChecked
                            />
                            <Label for="radio1">Small</Label>
                          </FormGroup>
                          <FormGroup className="radio abc-radio">
                            <Input type="radio" id="radio2" name="radio1" value="option2" />
                            <Label for="radio2">Big</Label>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className="radio abc-radio abc-radio-danger">
                            <Input type="radio" id="radio3" value="option1" name="radio2" />
                            <Label for="radio3">Next</Label>
                          </FormGroup>
                          <FormGroup className="radio abc-radio abc-radio-danger">
                            <Input
                              type="radio" id="radio4" value="option2" name="radio2"
                              defaultChecked
                            />
                            <Label for="radio4">One</Label>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className="radio abc-radio">
                            <Input type="radio" name="radio3" id="radio5" value="option1" disabled />
                            <Label for="radio5">Next</Label>
                          </FormGroup>
                          <FormGroup className="radio abc-radio abc-radio-warning">
                            <Input
                              type="radio" name="radio3" id="radio6" value="option2" disabled
                              defaultChecked
                            />
                            <Label for="radio6">One</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Simple File Uploads</div>
                <FormGroup row>
                  <Label lg="3" className="text-md-right mt-3">
                    File input
                  </Label>
                  <Col lg="9">
                    <div className="input-group mb-4 px-2 py-2 rounded-pill bg-light-gray">
                      <input
                        id="upload"
                        type="file"
                        // onChange="readURL(this);"
                        className={`form-control border-0 ${s.upload}`}
                      />
                      <label id="upload-label" htmlFor="upload" className={`font-weight-light text-muted ${s.uploadLabel}`}>Choose
                        file</label>
                      <div className="input-group-append">
                        <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4">
                          <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                        </label>
                      </div>
                    </div>
                    <div className="label muted text-center mb-2">
                      The image uploaded will be rendered inside the box
                      below.
                    </div>
                    <div className={`mt-2 ${s.imageArea}`}>
                      <img id="imageResult" src="#" alt="" className="img-fluid rounded shadow-sm mx-auto d-block"/>
                    </div>
                  </Col>
                </FormGroup>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-3">Drop Zone</div>
                <div className="mb-3 body-3 muted">
                  <code>react-dropzone</code> is a simple React hook to create a HTML5-compliant drag'n'drop zone for files.
                </div>
                <div {...getRootProps()} className={s.dropzone}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p className="muted">Drop the files here ...</p> :
                      <p className="muted">Drag 'n' drop some files here, or click to select files</p>
                  }
                </div>

              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
