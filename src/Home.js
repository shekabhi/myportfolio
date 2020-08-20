import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container style={{ marginTop: '60px' }}>
          <Row>
            <Col>
              <div
                className="container"
                style={{
                  marginTop: '100px',
                  marginLeft: '100px',
                  backgroundColor: 'white',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    backgroundColor: '#47DDFF',
                    width: '100px',
                    height: '40px',
                    borderRadius: '20px 41px 41px 0px ',
                    marginLeft: '15px',
                  }}
                  className="container"
                >
                  <h6
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Segoe UI',
                      paddingTop: '10px',
                      fontWeight: '800',
                    }}
                  >
                    Hey I'm
                  </h6>
                </div>
                <h1
                  style={{
                    fontFamily: 'Segoe UI Semibold',
                    marginTop: '12px',
                    fontSize: '45px',
                    letterSpacing: '1px',
                  }}
                >
                  Abhishek Shukla
                </h1>
                <h6
                  style={{
                    fontFamily: 'Segoe UI Semibold',
                  }}
                >
                  Full Stack Developer
                </h6>
                <Container style={{ marginTop: '10px' }}>
                  <Row>
                    <FontAwesomeIcon icon={faEnvelope} color="#47DDFF" />
                    <h7
                      style={{
                        fontSize: '13px',
                        marginLeft: '10px',
                      }}
                    >
                      shekabhi369@gmail.com
                    </h7>
                  </Row>
                </Container>
                <Container style={{ marginTop: '5px' }}>
                  <Row>
                    <FontAwesomeIcon icon={faMapMarkerAlt} color="#47DDFF" />
                    <h7
                      style={{
                        fontSize: '13px',
                        marginLeft: '10px',
                      }}
                    >
                      India
                    </h7>
                  </Row>
                </Container>
                <Container style={{ marginTop: '50px', marginLeft: '40px' }}>
                  <Row>
                    <a href="https://github.com/shekabhi" target="_blank">
                      <FontAwesomeIcon
                        className="brand-icon"
                        icon={faGithub}
                        color="#47ddff"
                        size="lg"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abhishek-shukla-595363153/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="brand-icon"
                        icon={faLinkedinIn}
                        color="#47DDFF"
                        size="lg"
                      />
                    </a>
                    <a href="https://medium.com/@shekabhi369" target="_blank">
                      <FontAwesomeIcon
                        className="brand-icon"
                        icon={faMedium}
                        color="#47DDFF"
                        size="lg"
                      />
                    </a>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col sm={7}>
              <div style={{}} className="container">
                <img
                  style={{ marginTop: '30px' }}
                  src={
                    'https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif'
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

export default Home;
