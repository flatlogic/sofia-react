import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Nav,
  NavLink,
  NavItem,
  Progress,
  Jumbotron,
} from 'reactstrap';
import Formsy from "formsy-react";
import Select from "react-select";
import MaskedInput from "react-maskedinput";
import { selectCountriesData, selectShipmentData, cardTypesData } from "./data";
import InputValidation from "../../../components/InputValidation/InputValidation";
import Widget from "../../../components/Widget/Widget";

const theme = (theme) => ({
  ...theme,
  borderRadius: 8,
  spacing: {
    ...theme.spacing,
    controlHeight: 45,
  },
  colors: {
    ...theme.colors,
    primary25: '#f7f8fb',
    primary: '#4d53e0',
  },
})
const steps = 4;
const StepsComponents = {
  Step1: function Step1() {
    return (
      <fieldset>
        <FormGroup>
          <Label for="username">Username</Label>
          <InputValidation
            type="text"
            id="username"
            name="username"
            trigger="change"
            required
            validations={{ isAlphanumeric: true }}
            validationError={{ isAlphanumeric: 'Username must contain symbols without spaces'}}
          />
          <p className="help-block body-3 muted">Username can contain any letters or numbers, without spaces</p>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <InputValidation
            type="text"
            id="email"
            name="email"
            validations={{ isEmail: true }}
            required
            validationError={{ isEmail: 'Please provide your E-mail' }}
          />
          <p className="help-block body-3 muted">Please provide your E-mail</p>
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            required
            validationError={{ isAlpha: 'Please provide your address' }}
          />
          <p className="help-block body-3 muted">Please provide your address</p>
        </FormGroup>
      </fieldset>
    );
  },
  Step2: function Step2() {
    return (
      <fieldset>
        <FormGroup>
          <Label for="country-select">Destination Country</Label>
          <Select
            className="customized-select"
            options={selectCountriesData}
            theme={theme}
          />
          <p className="help-block body-3 muted">Please choose your country destination</p>
        </FormGroup>
        <FormGroup>
          <Label for="courier">Choose shipping option</Label>
          <Select
            className="customized-select"
            options={selectShipmentData}
            theme={theme}
          />
          <p className="help-block body-3 muted">Please choose your shipping option</p>
        </FormGroup>
        <FormGroup>
          <Label for="destination">Destination Zip Code</Label>
          <MaskedInput
            className="form-control" id="destination" mask="111111"
            size="6"
          />
          <p className="help-block body-3 muted">Please provide your Destination Zip Code</p>
        </FormGroup>
        <FormGroup>
          <Label for="dest-address">Destination Address</Label>
          <InputValidation type="text" id="dest-address" name="dest-address" />
          <p className="help-block body-3 muted">Please provide the destination address</p>
        </FormGroup>
      </fieldset>
    )
  },
  Step3: function Step3() {
    return (
      <fieldset>
        <FormGroup>
          <Label for="name">Cardholder name</Label>
          <InputValidation type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label for="credit-card-type">Choose shipping service</Label>
          <Select
            className="selectCustomization"
            options={cardTypesData}
            theme={theme}
          />
        </FormGroup>
        <FormGroup>
          <Label for="card-number">Card Number</Label>
          <MaskedInput
            className="form-control"
            id="card-number"
            name="card-number"
            mask="1111 1111 1111 1111"
          />
        </FormGroup>
        <FormGroup>
          <Label for="expiration-date">Card Number</Label>
          <MaskedInput
            className="form-control"
            id="expiration-date"
            name="expiration-date"
            mask="11 &#8725; 11"
          />
        </FormGroup>
      </fieldset>
    )
  }
}

export default function Wizard() {

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25)

  const nextStep = () => {
    let newStep = currentStep;
    if (newStep === steps) {
      newStep = 1;
    } else {
      newStep += 1;
    }
    setCurrentStep(newStep);
    setProgress((100 / steps) * newStep)
  }

  const previousStep = () => {
    let newStep = currentStep;
    if (currentStep === 1) {
      newStep = 1;
    } else {
      newStep -= 1;
    }
    setCurrentStep(newStep);
    setProgress((100 / steps) * newStep)
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={9}>
              <Widget className="widget-p-md">
                <div className="headline-1">Form Wizard</div>
                <p className="mb-4">An example of complete wizard form in widget.</p>
                <Nav pills justified className="">
                  <NavItem>
                    <NavLink active={currentStep === 1}>
                      <small>1.</small>
                      &nbsp;
                      Your Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={currentStep === 2}>
                      <small>2.</small>
                      &nbsp;
                      Shipping Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={currentStep === 3}>
                      <small>2.</small>
                      &nbsp;
                      Payment Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={currentStep === 4}>
                      <small>2.</small>
                      &nbsp;
                      Complete
                    </NavLink>
                  </NavItem>
                </Nav>
                <Progress value={progress} color="primary" className="progress-xs my-3"  />
                <div className="bg-light-gray p-3">
                  <Formsy>
                    {currentStep === 1 && <StepsComponents.Step1 />}
                    {currentStep === 2 && <StepsComponents.Step2 />}
                    {currentStep === 3 && <StepsComponents.Step3 />}
                  </Formsy>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <Button
                    className="d-flex align-items-center"
                    disabled={currentStep === 1}
                    color="primary"
                    onClick={previousStep}
                  >
                    <i className="fa fa-angle-left mr-1"/>
                    &nbsp;Previous
                  </Button>
                  <div>
                    {currentStep < steps &&
                    <Button
                      className="d-flex align-items-center"
                      color="primary"
                      onClick={nextStep}
                    >
                      Next
                      <i className="fa fa-angle-right ml-1"/>
                    </Button>
                    }
                    {currentStep === steps &&
                    <Button
                      className="d-flex align-items-center"
                      color="success"
                      onClick={nextStep}
                    >
                      Finish
                      <i className="fa fa-check-circle ml-1"/>
                    </Button>
                    }
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
