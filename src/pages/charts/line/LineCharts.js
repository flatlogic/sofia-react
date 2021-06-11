import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ApexCharts from "react-apexcharts";
import Widget from "../../../components/Widget/Widget";
import chartsData from "./mock";

export default function LineCharts() {

  const [activeTab, setActiveTab] = useState(1);
  const {apexCharts, recharts, echarts} = chartsData;

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <Widget className="charts-tabs-widget">
      <Nav tabs className="mb-5">
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 1})}
            onClick={() => toggleTab(1)}
          >
            <div className="headline-3">Apex Charts</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 2})}
            onClick={() => toggleTab(2)}
          >
            <div className="headline-3">Recharts</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 3})}
            onClick={() => toggleTab(3)}
          >
            <div className="headline-3">Apache ECharts</div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId={1}>
          <Col>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Basic Line Chart</div>
                  <ApexCharts
                    series={apexCharts.basicLine.series}
                    options={apexCharts.basicLine.options}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Charts With Labels</div>
                  <ApexCharts
                    series={apexCharts.basicWithLabels.series}
                    options={apexCharts.basicWithLabels.options}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Column Mixed Chart</div>
                  <ApexCharts
                    series={apexCharts.lineColumn.series}
                    options={apexCharts.lineColumn.options}
                    type="area"
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Area Mixed Chart</div>
                  <ApexCharts
                    series={apexCharts.lineArea.series}
                    options={apexCharts.lineArea.options}
                    type="area"
                  />
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
        <TabPane tabId={2}>
          <Row>
            <Col xs={12} lg={6}>
              <Widget><div>Hi</div></Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget><div>Hi</div></Widget>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={3}>
          <Row>
            <Col xs={12} lg={6}>
              <Widget><div>Hola</div></Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget><div>Hola</div></Widget>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Widget>
  )
}
