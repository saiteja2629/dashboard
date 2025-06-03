import React, { useState } from 'react';
import { Tabs, Tab, Table, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChartComponent from './Chart';

const MainContent = () => {
  const [key, setKey] = useState('home');

  return (
    <Container fluid>
        <>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="dashboard-tabs"style={{paddingTop: "10px"}}>
            <Tab eventKey="home" title="Blocked Starved">
              <ChartComponent/>
              <h6 style={{marginTop: "50px"}}>Details within Teams</h6>
              <Table  bordered hover responsive>
                <thead>
                  <tr>
                  <th>Title</th>
                  <th>Title</th>
                    <th>Title</th>
                    <th>Title</th>

                    <th>Title</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>

                    <td>Data</td>

                  </tr>
                  <tr>
                  <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>

                    <td>Data</td>
                  </tr>
                  <tr>
                  <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>

                    <td>Data</td>
                  </tr>
                  <tr>
                  <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>

                    <td>Data</td>
                  </tr>
                  <tr>
                  <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>

                    <td>Data</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="profile" title="Bottleneck">
            </Tab>
            <Tab eventKey="downtime" title="Downtime">
            </Tab>
            <Tab eventKey="availability" title="Availability">
            </Tab>
            <Tab eventKey="Cycle Time" title="Cycle Time">
            </Tab>
            <Tab eventKey="Insights" title="Insights">
            </Tab>
          </Tabs>
        </>
    </Container>
  );
};

export default MainContent;
