import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/imgs/ROHIT.svg";
import navIcon1 from "../assets/imgs/nav-icon1.svg";
import navIcon2 from "../assets/imgs/nav-icon2.svg";
import navIcon3 from "../assets/imgs/nav-icon3.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-item-center">
            <Col sm={6} className="text-center text-sm-start">
              <img src={logo} alt="Logo-rohit" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/rohit-pandey-2500b6215/" target="_blank">
                  <img src={navIcon1} alt="./."/>
                </a>
                <a  href="https://github.com/rohitPandey469" target="_blank" onClick={() => {
                alert("Facebook deactivated for the moment being so CONNECTED TO GIT here");
              }}>
                  <img src={navIcon2} alt="./." />
                </a>
                <a href="https://www.instagram.com/_itx_rohittt_/" target="_blank">
                  <img src={navIcon3} alt="./." />
                </a>
              </div>
              <p>
              <p class="copy">&copy; Copyright 2023, All Right Reserved</p>
              <p class="copy">
                Built with &#x2661; by <a href="#">Rohit Pandey</a>
              </p>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
