import React from "react";
import {
  Col,
  Row,
  Badge
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import starIcon from "../../../assets/badgesIcons/starIcon.svg";
import s from "./Badges.module.scss";

export default function Badges() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges</div>
                <div className="mt-2 mb-3">Add modifier <code>color="*"</code> property to change the appearance of a badge. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge color="primary">Primary</Badge>
                  <Badge>Default</Badge>
                  <Badge color="secondary-red">Sec. Red</Badge>
                  <Badge color="secondary-yellow">Sec. Yellow</Badge>
                  <Badge color="secondary-cyan">Sec. Cyan</Badge>
                  <Badge color="success">Success</Badge>
                  <Badge color="info">Info</Badge>
                  <Badge color="warning">Warning</Badge>
                  <Badge color="danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges with icons</div>
                <div className="mt-2 mb-3">Add any icon to make the badge more enjoyable and informative. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge color="primary"><img src={starIcon} alt="star"/>Primary</Badge>
                  <Badge><img src={starIcon} alt="star"/>Default</Badge>
                  <Badge color="secondary-red"><img src={starIcon} alt="star"/>Sec. Red</Badge>
                  <Badge color="secondary-yellow"><img src={starIcon} alt="star"/>Sec. Yellow</Badge>
                  <Badge color="secondary-cyan"><img src={starIcon} alt="star"/>Sec. Cyan</Badge>
                  <Badge color="success"><img src={starIcon} alt="star"/>Success</Badge>
                  <Badge color="info"><img src={starIcon} alt="star"/>Info</Badge>
                  <Badge color="warning"><img src={starIcon} alt="star"/>Warning</Badge>
                  <Badge color="danger"><img src={starIcon} alt="star"/>Danger</Badge>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges</div>
                <div className="mt-2 mb-3">Add modifier <code>color="*"</code> property to change the appearance of a badge. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge className="badge-inverse-primary">Primary</Badge>
                  <Badge className="badge-inverse-default">Default</Badge>
                  <Badge className="badge-inverse-secondary-red">Sec. Red</Badge>
                  <Badge className="badge-inverse-secondary-yellow">Sec. Yellow</Badge>
                  <Badge className="badge-inverse-secondary-cyan">Sec. Cyan</Badge>
                  <Badge className="badge-inverse-success">Success</Badge>
                  <Badge className="badge-inverse-info">Info</Badge>
                  <Badge className="badge-inverse-warning">Warning</Badge>
                  <Badge className="badge-inverse-danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges with icons</div>
                <div className="mt-2 mb-3">Add any icon to make the badge more enjoyable and informative. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge className="badge-inverse-primary" color="primary"><img src={starIcon} alt="star"/>Primary</Badge>
                  <Badge><img src={starIcon} alt="star"/>Default</Badge>
                  <Badge color="secondary-red"><img src={starIcon} alt="star"/>Sec. Red</Badge>
                  <Badge color="secondary-yellow"><img src={starIcon} alt="star"/>Sec. Yellow</Badge>
                  <Badge color="secondary-cyan"><img src={starIcon} alt="star"/>Sec. Cyan</Badge>
                  <Badge color="success"><img src={starIcon} alt="star"/>Success</Badge>
                  <Badge color="info"><img src={starIcon} alt="star"/>Info</Badge>
                  <Badge color="warning"><img src={starIcon} alt="star"/>Warning</Badge>
                  <Badge color="danger"><img src={starIcon} alt="star"/>Danger</Badge>
                </div>
              </Widget>            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges</div>
                <div className="mt-2 mb-3">Add modifier <code>color="*"</code> property to change the appearance of a badge. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge href="#" pill color="primary">Primary</Badge>
                  <Badge href="#" pill>Default</Badge>
                  <Badge href="#" pill color="secondary-red">Sec. Red</Badge>
                  <Badge href="#" pill color="secondary-yellow">Sec. Yellow</Badge>
                  <Badge href="#" pill color="secondary-cyan">Sec. Cyan</Badge>
                  <Badge href="#" pill color="success">Success</Badge>
                  <Badge href="#" pill color="info">Info</Badge>
                  <Badge href="#" pill color="warning">Warning</Badge>
                  <Badge href="#" pill color="danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges with icons</div>
                <div className="mt-2 mb-3">Add any icon to make the badge more enjoyable and informative. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge href="#" pill color="primary"><img src={starIcon} alt="star"/>Primary</Badge>
                  <Badge href="#" pill><img src={starIcon} alt="star"/>Default</Badge>
                  <Badge href="#" pill color="secondary-red"><img src={starIcon} alt="star"/>Sec. Red</Badge>
                  <Badge href="#" pill color="secondary-yellow"><img src={starIcon} alt="star"/>Sec. Yellow</Badge>
                  <Badge href="#" pill color="secondary-cyan"><img src={starIcon} alt="star"/>Sec. Cyan</Badge>
                  <Badge href="#" pill color="success"><img src={starIcon} alt="star"/>Success</Badge>
                  <Badge href="#" pill color="info"><img src={starIcon} alt="star"/>Info</Badge>
                  <Badge href="#" pill color="warning"><img src={starIcon} alt="star"/>Warning</Badge>
                  <Badge href="#" pill color="danger"><img src={starIcon} alt="star"/>Danger</Badge>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
