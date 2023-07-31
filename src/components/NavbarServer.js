import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/imgs/ROHIT.svg";
import navIcon1 from "../assets/imgs/nav-icon1.svg";
import navIcon2 from "../assets/imgs/nav-icon2.svg";
import navIcon3 from "../assets/imgs/nav-icon3.svg";
// import "../App.css"

function BasicExample() {
  // To hold the state of activeLink
  const [activeLink, setActiveLink] = useState("home");
  //   To hold the information if the user has scrolled or not
  const [scrolled, setScrolled] = useState(false);
  // Use effect will trigger when the scroll starts
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const updateActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="LOGO"></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-dark"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("home");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skill"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("skills");
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("projects");
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/rohit-pandey-2500b6215/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="./." />
                </a>
                <a
                  href="https://github.com/rohitPandey469"
                  target="_blank"
                  onClick={() => {
                    alert(
                      "Facebook deactivated for the moment being so CONNECTED TO GIT here"
                    );
                  }}
                >
                  <img src={navIcon2} alt="./." />
                </a>
                <a
                  href="https://www.instagram.com/_rohit._n.d.b.td/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="./." />
                </a>
              </div>
            </span>
            <button className="navbar-text-button">
              <a
                href="#connect"
                style={{
                  textDecoration: "none",
                  color: "#4c7fcb",
                }}
              >
                Let's Connect
              </a>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
