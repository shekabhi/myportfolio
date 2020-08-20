import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p className="footer-text">
          Design by <span> &#10084; </span> React
        </p>
      </div>
    );
  }
}

export default Footer;
