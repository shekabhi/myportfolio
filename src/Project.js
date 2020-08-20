import React, { Component } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

class Project extends Component {
  render() {
    return (
      <div
        style={{ marginTop: '40px', marginBottom: '100px' }}
        className="Project"
      >
        <Container style={{}}>
          <Row>
            <Col>
              <div
                className="container"
                style={{
                  marginTop: '40px',
                  marginLeft: '70px',
                  backgroundColor: 'white',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Segoe UI Semibold',
                    letterSpacing: '1px',
                    fontSize: '40px',
                  }}
                >
                  Projects
                </h1>
                <Container
                  style={{
                    marginTop: '40px',
                  }}
                >
                  <Row>
                    <p
                      style={{
                        marginTop: '4px',
                      }}
                    >
                      For More Projects Please Check Out my GitHub
                    </p>
                    <a href="https://github.com/shekabhi" target="_blank">
                      <FontAwesomeIcon
                        style={{ marginLeft: '10px' }}
                        className="brand-icon"
                        icon={faGithub}
                        color="#47ddff"
                        size="2x"
                      />
                    </a>
                  </Row>
                </Container>
              </div>
              <Container>
                <Row>
                  <Card
                    style={{
                      width: '14rem',
                      height: '14rem',
                      borderColor: '#47DDFF',
                      marginTop: '40px',
                      marginLeft: '45px',
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: '#004453',
                          fontFamily: 'Segoe UI Semibold',
                          fontSize: '20px',
                          borderColor: '#47DDFF',
                          backgroundColor: 'white',
                          textAlign: 'center',
                          marginTop: '10px',
                        }}
                      >
                        Covid'19
                      </Card.Title>
                      <Card.Text
                        style={{ marginTop: '25px', fontSize: '15px' }}
                      >
                        A Covid Meter Application using Flutter and Rest API For
                        Live Updated Data .
                      </Card.Text>
                      <a
                        href="https://github.com/shekabhi/Covid-Meter"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="brand-icon"
                          style={{ float: 'right', marginRight: '30px' }}
                          icon={faArrowRight}
                          color="#47DDFF"
                          size="lg"
                        />
                      </a>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{
                      width: '14rem',
                      height: '14rem',
                      borderColor: '#47DDFF',
                      marginTop: '40px',
                      marginLeft: '45px',
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: '#004453',
                          fontFamily: 'Segoe UI Semibold',
                          fontSize: '20px',
                          borderColor: '#47DDFF',
                          backgroundColor: 'white',
                          textAlign: 'center',
                          marginTop: '10px',
                        }}
                      >
                        Indian Railway
                      </Card.Title>
                      <Card.Text
                        style={{ marginTop: '25px', fontSize: '15px' }}
                      >
                        A Spring Boot Based App to Check PNR , Train Route, Live
                        Train , Seat Availability.
                      </Card.Text>
                      <a
                        href="https://github.com/shekabhi/IndianTrainInfo"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="brand-icon"
                          style={{ float: 'right', marginRight: '30px' }}
                          icon={faArrowRight}
                          color="#47DDFF"
                          size="lg"
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </Col>
            <Col sm={6}>
              <div style={{}} className="container">
                <img
                  style={{
                    marginTop: '20px',

                    width: '650',
                    height: '450px',
                  }}
                  src={
                    'https://cdn.dribbble.com/users/2145071/screenshots/4503713/dev.gif'
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project;
