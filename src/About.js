import React, { Component } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#FEFEFE' }} className="About">
        <Container style={{}}>
          <Row>
            <Col sm={7}>
              <div style={{}} className="container">
                <img
                  style={{
                    marginTop: '100px',
                    marginBottom: '150px',
                    width: '550px',
                    height: '400px',
                  }}
                  src={
                    'https://i-ps.co.uk/wp-content/uploads/2018/04/gameblog2.gif'
                  }
                />
              </div>
            </Col>
            <Col>
              <div
                className="container"
                style={{
                  marginTop: '100px',
                  marginLeft: '20px',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Segoe UI Semibold',
                    marginTop: '12px',
                    fontSize: '40px',
                    letterSpacing: '1px',
                  }}
                >
                  About Me
                </h1>
                <p
                  style={{
                    marginTop: '40px',
                  }}
                >
                  Hi, I'm Abhishek Kumar Shukla, a Full Stack Developer from
                  India, currently I'm a creative problem solving enthusiast and
                  a product guy, with a constantly growing love for great
                  products.
                </p>
                <Container>
                  <Row>
                    <Card
                      className="card-design1"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>
                        Spring Boot
                      </Card.Body>
                    </Card>
                    <Card
                      className="card-design"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>
                        Spring Security
                      </Card.Body>
                    </Card>
                    <Card
                      className="card-design"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>React</Card.Body>
                    </Card>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Card
                      className="card-design1"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>
                        Flutter
                      </Card.Body>
                    </Card>
                    <Card
                      className="card-design"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>
                        Competitive Programming
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Card
                      className="card-design1"
                      style={{ borderColor: '#47DDFF' }}
                    >
                      <Card.Body style={{ color: '#004453' }}>
                        Adobe XD
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
