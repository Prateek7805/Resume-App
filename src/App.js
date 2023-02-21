
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbaar, { stCapitalize } from './components/Navbar';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { useState } from 'react';
import allData from './components/data';
function App() {



  const [navHeight, setNavHeight] = useState(20);

  return (
    <div className="wrapper">
      <Navbaar dimension={[navHeight, setNavHeight]} data={allData}></Navbaar>
      <Container fluid className="resume-body" style={{ top: navHeight }}>
        <Row>
          <Col xs={12} md={6}>
            <Row className="card-row" id={allData[1].href}>
              <Card>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(allData[1].title)}
                  </Card.Title>
                  {
                    allData[1].content.map((item, key) => {
                      return (
                        <div key={key}>

                          <hr />
                          <Card.Subtitle style={{ fontSize: "12px" }}>
                            <div>
                              {
                                item.jobTitle
                              }
                            </div>
                            <div>
                              {
                                item.orgName
                              }
                            </div>
                            <div>
                              {
                                item.location
                              }
                            </div>
                            <div>
                              {
                                `${item.fromDate}-${item.toDate || "Present"}`
                              }
                            </div>
                            <hr />
                          </Card.Subtitle>
                          <ListGroup as="ul" style={{ fontSize: "12px" }}>
                            {item.points.map((i, k) => {
                              return (
                                <ListGroup.Item as="li" key={k}>
                                  {i}
                                </ListGroup.Item>
                              )
                            })}
                          </ListGroup>
                        </div>
                      )
                    }

                    )
                  }
                </Card.Body>
              </Card>
            </Row>
            <Row className="card-row" id={allData[2].href}>
              <Card>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(allData[2].title)}
                  </Card.Title>
                  {
                    allData[2].content.map((item, key) => {
                      return (
                        <div key={key}>

                          <hr />
                          <Card.Subtitle style={{ fontSize: "12px" }}>
                            <div>
                              {
                                `${item.course}, ${item.institution}`
                              }
                            </div>
                          </Card.Subtitle>
                          <Card.Text style={{ fontSize: "12px" }}>
                            <div>
                              {
                                item.location
                              }
                            </div>
                            <div>
                              {
                                `${item.fromDate}-${item.toDate || "Present"}`
                              }
                            </div>
                          </Card.Text>

                        </div>
                      )
                    }

                    )
                  }
                </Card.Body>
              </Card>
            </Row>
            <Row className="card-row" id={allData[3].href}>
              <Card>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(allData[3].title)}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px" }}>
                    {
                      allData[3].content.map((item, key) => {
                        return (
                          <div key={key}>

                            <hr />

                            <Row>
                              <Col lg={3} md={4} xs={4}><p style={{ fontWeight: 600 }}>{item.type}</p></Col>
                              <Col lg={9} md={8} xs={8} ><p>{item.skillset.join(', ')}</p>

                              </Col>
                            </Row>


                          </div>
                        )
                      }


                      )
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="card-row" id={allData[4].href}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(allData[4].title)}</Card.Title>
                  <Card.Text style={{ fontSize: '12px' }}>
                    {
                      allData[4].content.map((item, key) => {
                        return (
                          <div key={key}>
                            <hr />
                            <span style={{ fontWeight: 600, paddingRight: '10px' }}>{`${item.title}:`}</span>
                            <span>{item.desc}</span>
                            {item.demo ? <Card.Link style={{ paddingLeft: '10px' }} href={item.demo}>Demo</Card.Link> : ""}
                          </div>
                        )
                      })
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="card-row" id={allData[5].href}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(allData[5].title)}</Card.Title>
                  <Card.Text style={{ fontSize: '12px' }}>
                    {
                      allData[5].content.map((item, key) => {
                        return (
                          <div key={key}>
                            <hr />
                            <Row>
                              <Col lg={8} md={8} xs={12}>
                                <p style={{ fontWeight: 600 }}>
                                  {item.title}
                                </p>
                              </Col>
                              <Col lg={4} md={4} xs={12}>
                                <p>
                                  {item.platform}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        )
                      })
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="card-row" id={allData[6].href}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(allData[6].title)}</Card.Title>
                  <Card.Text style={{ fontSize: '12px' }}>
                  <hr/>    
                  <ul>
                    {
                      allData[6].content.map((item, key) => {
                        return (
                          <li style={{padding: "10px"}} key={key}>{item.title}</li>
                        )
                      })
                    }
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="card-row" id={allData[7].href}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(allData[7].title)}</Card.Title>
                  <Card.Text style={{ fontSize: '12px' }}>
                  <hr/>    
                  <ul>
                    {
                      allData[7].content.map((item, key) => {
                        return (
                          <li style={{padding: "10px"}} key={key}><Badge>{item.language}</Badge></li>
                        )
                      })
                    }
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
